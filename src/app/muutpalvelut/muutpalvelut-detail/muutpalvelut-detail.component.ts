import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Palvelu } from '../muutpalvelut.model';
import { GalleryService } from 'src/app/gallery/gallery.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TekstiStorageService } from 'src/app/shared/teksti-storage.service';


@Component({
  selector: 'app-muutpalvelut-detail',
  templateUrl: './muutpalvelut-detail.component.html',
  styleUrls: ['./muutpalvelut-detail.component.css']
})
export class MuutpalvelutDetailComponent implements OnInit {

  palvelu: Palvelu;
  id: number;
  isAuthenticated = false;
  subscription: Subscription; 
  private userSub: Subscription;


  constructor(private galleryService: GalleryService,
              private dataStorageService: DataStorageService,
              private tekstiStorageService: TekstiStorageService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {

    this.route.params
    .subscribe(
     (params: Params) => {
     this.id = +params['id'];
     this.palvelu = this.galleryService.getPalvelu(this.id);
    }
   );
      this.userSub = this.authService.user.subscribe(user => {
       this.isAuthenticated = !!user;
                  
       });
       }
            
  ngOnDestroy() {          
     this.userSub.unsubscribe();
  } 
            
   onEditPalvelu() {
     this.router.navigate(['edit'], {relativeTo: this.route});
            
       }
            
            
   onDeletePalvelu() {
       this.galleryService.deletePalvelu(this.id);
       this.router.navigate(['/palvelut']);
       this.dataStorageService.storePalvelut();

   }
              
   onCancel() { 
     
  this.router.navigate(['../'], {relativeTo: this.route}); 
              
    } 
              
              
 }
            