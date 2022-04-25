 
import { Component, OnInit, OnDestroy } from '@angular/core';  
import { Router, ActivatedRoute, Params} from '@angular/router';  
import { Subscription } from 'rxjs';  
import { GalleryService } from 'src/app/gallery/gallery.service';

import { Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Remontti } from '../remontit.model';
import { Teksti } from 'src/app/gallery/teksti.model';
import { TekstiService } from 'src/app/gallery/teksti.service';

@Component({

  selector: 'app-remontit-list',
  templateUrl: './remontit-list.component.html',
  styleUrls: ['./remontit-list.component.css']
})

export class RemontitListComponent implements OnInit {
  tekstit: Teksti[];
  remontit: Remontti[]; 
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

  
    this.subscription = this.galleryService.remontitChanged  
    .subscribe(  
      (remontit: Remontti[]) => {  
        this.remontit = remontit;  
      }  

    );  


  this.remontit = this.galleryService.getRemontit();  
   this.tekstit = this.tekstiService.getTekstit();  
    this.userSub = this.authService.user.subscribe(user => { 
      this.isAuthenticated = !!user; 
    }); 

  }

  
  onNewRemontti() {  
    this.router.navigate(['new'], {relativeTo: this.route});  
  }  

}
