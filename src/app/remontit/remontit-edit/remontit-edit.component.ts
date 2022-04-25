import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; 
import { GalleryService } from 'src/app/gallery/gallery.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TekstiStorageService } from 'src/app/shared/teksti-storage.service';

@Component({
  selector: 'app-remontit-edit',
  templateUrl: './remontit-edit.component.html',
  styleUrls: ['./remontit-edit.component.css']
})
export class RemontitEditComponent implements OnInit {

  id: number; 
  editMode = false; 
  remonttiForm: FormGroup; 
  basePath = '/images';                       
  downloadableURL = '';                      
  task: AngularFireUploadTask;               
  progressValue: Observable<number>;     

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private dataStorageService: DataStorageService,
              private tekstiStorageService: TekstiStorageService,
              private galleryService: GalleryService,
              private fireStorage: AngularFireStorage,) { }


  ngOnInit() { 
    this.route.params 
      .subscribe( 
        (params: Params) => { 
          this.id = +params['id']; 
          this.editMode = params['id'] != null; 
          this.initForm();
        } 
      ); 
  } 

  async onFileChanged(event) {
    const file = event.target.files[0];
    if (file) {
       const filePath = `${this.basePath}/${file.name}`;  
       this.task =  this.fireStorage.upload(filePath, file);    
       this.progressValue = this.task.percentageChanges();      
       (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });  
 
     } else {  
       alert('No images selected');
       this.downloadableURL = ''; }
   }


  onSubmit() { 

    if (this.editMode) { 
      this.galleryService.updateRemontti(this.id, this.remonttiForm.value); 
    } else { 
      this.galleryService.addRemontti(this.remonttiForm.value); 
    } 
    this.onCancel(); 
    this.dataStorageService.storeRemontit();
    this.tekstiStorageService.storeTekstit();
  } 
  

  onCancel() { 
    this.router.navigate(['../'], {relativeTo: this.route}); 
  } 

  private initForm() { 
    let remonttiTeksti = ''; 
    let remonttiImagePath = ''; 
  
    if (this.editMode) {
      const remontti = this.galleryService.getRemontti(this.id);
      remonttiTeksti = remontti.teksti;
      remonttiImagePath = remontti.imagePath;
    
    }

    this.remonttiForm = new FormGroup({ 
      teksti: new FormControl(remonttiTeksti), 
      imagePath: new FormControl(remonttiImagePath), 
      
    }); 
  } 

} 
