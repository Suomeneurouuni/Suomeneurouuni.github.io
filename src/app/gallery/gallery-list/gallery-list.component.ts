 

import { Component, OnInit, OnDestroy } from '@angular/core';  
import { Router, ActivatedRoute, Params} from '@angular/router';  
import { Subscription } from 'rxjs';  
import { Item } from '../gallery.model';  
import { GalleryService } from '../gallery.service';  
import { AuthService } from 'src/app/auth/auth.service'; 
import { TekstiService } from '../teksti.service'; 
import { Teksti } from '../teksti.model'; 
import { Input } from '@angular/core';

@Component({  

  selector: 'app-gallery-list',  
  templateUrl: './gallery-list.component.html',  
  styleUrls: ['./gallery-list.component.css']  

})  

export class GalleryListComponent implements OnInit {  

  items: Item[]; 
  tekstit: Teksti[]; 
  isAuthenticated = false; 
  subscription: Subscription;  
  private userSub: Subscription; 
  id: number;  
  editMode = false;  
  @Input() index: number; 
 
  constructor(private galleryService: GalleryService,  
              private tekstiService: TekstiService,  
              private router: Router, 
              private authService: AuthService,  
              private route: ActivatedRoute) {  
  }  


  ngOnInit() {  

    this.subscription = this.galleryService.itemsChanged  
    .subscribe(  
      (items: Item[]) => {  
        this.items = items;  
      }); 
  
      this.subscription = this.tekstiService.tekstitChanged  
    .subscribe(  
      (tekstit: Teksti[]) => {  
        this.tekstit = tekstit;  
      }  

    );  

  this.items = this.galleryService.getItems();  
  this.tekstit = this.tekstiService.getTekstit();  
    this.userSub = this.authService.user.subscribe(user => { 
      this.isAuthenticated = !!user; 
    }); 


  }  


  onNewItem() {  
    this.router.navigate(['new'], {relativeTo: this.route});  
  }  
  


  ngOnDestroy() {  
    this.subscription.unsubscribe();  
    this.userSub.unsubscribe(); 
  }  

} 