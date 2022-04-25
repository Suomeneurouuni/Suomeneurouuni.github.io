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
  selector: 'app-muutpalvelut-edit',
  templateUrl: './muutpalvelut-edit.component.html',
  styleUrls: ['./muutpalvelut-edit.component.css']
})
export class MuutpalvelutEditComponent implements OnInit {

  id: number; 
  editMode = false; 
  palveluForm: FormGroup; 
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
      this.galleryService.updatePalvelu(this.id, this.palveluForm.value); 
    } else { 
      this.galleryService.addPalvelu(this.palveluForm.value); 
    } 
    this.onCancel(); 
    this.dataStorageService.storePalvelut();
    this.tekstiStorageService.storeTekstit();
  } 
  

  onCancel() { 
    this.router.navigate(['../'], {relativeTo: this.route}); 
  } 

  private initForm() { 
    let palveluTeksti = ''; 
    let palveluImagePath = ''; 

    if (this.editMode) {
      const palvelu = this.galleryService.getPalvelu(this.id);
      palveluTeksti = palvelu.teksti;
      palveluImagePath = palvelu.imagePath;
    
    }

    this.palveluForm = new FormGroup({ 
      teksti: new FormControl(palveluTeksti), 
      imagePath: new FormControl(palveluImagePath), 
    
    }); 
  } 

} 
