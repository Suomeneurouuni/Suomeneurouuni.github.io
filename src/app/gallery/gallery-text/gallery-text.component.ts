import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Params, Router } from '@angular/router'; 
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'; 
import { TekstiService } from '../teksti.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TekstiStorageService } from 'src/app/shared/teksti-storage.service';


@Component({

  selector: 'app-gallery-text', 
  templateUrl: './gallery-text.component.html', 
  styleUrls: ['./gallery-text.component.css'] 

}) 

export class GalleryTextComponent implements OnInit { 

  display = true;
  id: number; 
  editMode = false; 
  textForm: FormGroup; 

  constructor(private route: ActivatedRoute, 
              private dataStorageService: DataStorageService,
              private tekstiStorageService: TekstiStorageService,
              private router: Router,
              private tekstiService: TekstiService,
      
              ) { 
  } 


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

  onSubmit() { 
    if (this.editMode) { 
      this.tekstiService.updateTeksti(this.id, this.textForm.value); 
    } else { 
      this.tekstiService.addTeksti(this.textForm.value); 
    } 
    this.onCancel(); 
    this.tekstiStorageService.storeTekstit();
  } 


  onCancel() { 
   this.display = false;
   this.router.navigate(['../'])
  } 

  private initForm() { 
    let tekstiText = ''; 
   
    if (this.editMode) {
      const teksti = this.tekstiService.getTeksti(this.id);
      tekstiText = teksti.text;
    }

    this.textForm = new FormGroup({ 
      text: new FormControl(tekstiText),
   
    }); 
    
  } 

} 
