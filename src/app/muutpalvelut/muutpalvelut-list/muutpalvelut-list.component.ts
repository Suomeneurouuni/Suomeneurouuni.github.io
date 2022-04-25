 
import { Component, OnInit, OnDestroy } from '@angular/core';  
import { Router, ActivatedRoute, Params} from '@angular/router';  
import { Subscription } from 'rxjs';  
import { GalleryService } from 'src/app/gallery/gallery.service';

import { Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Palvelu } from '../muutpalvelut.model';
import { Teksti } from 'src/app/gallery/teksti.model';
import { TekstiService } from 'src/app/gallery/teksti.service';

@Component({

  selector: 'app-muutpalvelut-list',
  templateUrl: './muutpalvelut-list.component.html',
  styleUrls: ['./muutpalvelut-list.component.css']
})

export class MuutpalvelutListComponent implements OnInit {
  tekstit: Teksti[];
  palvelut: Palvelu[]; 
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

  
    this.subscription = this.galleryService.palvelutChanged  
    .subscribe(  
      (palvelut: Palvelu[]) => {  
        this.palvelut = palvelut;  
      }  

    );  


  this.palvelut = this.galleryService.getPalvelut();  
   this.tekstit = this.tekstiService.getTekstit();  
    this.userSub = this.authService.user.subscribe(user => { 
      this.isAuthenticated = !!user; 
    }); 

  }

  
  onNewPalvelu() {  
    this.router.navigate(['new'], {relativeTo: this.route});  
  }  

}
