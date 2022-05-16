 

import { Component, OnInit, OnDestroy } from '@angular/core';  
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';  

import { GalleryService } from '../gallery/gallery.service';
import { AuthService } from 'src/app/auth/auth.service'; 
import { TekstiService } from '../gallery/teksti.service';
import { Teksti } from '../gallery/teksti.model';
import { Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 

  tekstit: Teksti[]; 
  isAuthenticated = false; 
  subscription: Subscription;  
  private userSub: Subscription; 
  id: number;  
  editMode = false;  
  @Input() index: number; 
 
  constructor(private galleryService: GalleryService,  
              private tekstiService: TekstiService,  
              public router: Router, 
              private authService: AuthService,  
              private route: ActivatedRoute) {  
  }  


  ngOnInit() {  


  
      this.subscription = this.tekstiService.tekstitChanged  
    .subscribe(  
      (tekstit: Teksti[]) => {  
        this.tekstit = tekstit;  
      }  

    );  


  this.tekstit = this.tekstiService.getTekstit();  
    this.userSub = this.authService.user.subscribe(user => { 
      this.isAuthenticated = !!user; 
    }); 


  }  



  ngOnDestroy() {  
    this.subscription.unsubscribe();  
    this.userSub.unsubscribe(); 
  }  

} 