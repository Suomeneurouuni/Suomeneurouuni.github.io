 
import { Component, OnInit, OnDestroy } from '@angular/core';  
import { Router, ActivatedRoute, Params} from '@angular/router';  
import { Subscription } from 'rxjs';  
import { GalleryService } from 'src/app/gallery/gallery.service';

import { Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Korjaus } from '../korjaus.model';
import { Teksti } from 'src/app/gallery/teksti.model';
import { TekstiService } from 'src/app/gallery/teksti.service';

@Component({

  selector: 'app-korjaukset-list',
  templateUrl: './korjaukset-list.component.html',
  styleUrls: ['./korjaukset-list.component.css']
})

export class KorjauksetListComponent implements OnInit {
  tekstit: Teksti[];
  korjaukset: Korjaus[]; 
  isAuthenticated = false; 
  subscription: Subscription;  
  id: number;  
  editMode = false;  
  @Input() index: number;
  private userSub: Subscription;  
 
  constructor( 
      private galleryService: GalleryService,  
      private authService: AuthService,  
      private router: Router,
      private tekstiService: TekstiService,
      private route: ActivatedRoute  ) { }

  ngOnInit()  {

  
    this.subscription = this.galleryService.korjauksetChanged  
    .subscribe(  
      (korjaukset: Korjaus[]) => {  
        this.korjaukset = korjaukset;  
      }  

    );  


  this.korjaukset = this.galleryService.getKorjaukset();  
   this.tekstit = this.tekstiService.getTekstit();  
    this.userSub = this.authService.user.subscribe(user => { 
      this.isAuthenticated = !!user; 
    }); 

  }

  
  onNewKorjaus() {  
    this.router.navigate(['new'], {relativeTo: this.route});  
  }  

}
