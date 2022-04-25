import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Korjaus } from '../korjaus.model';
import { GalleryService } from 'src/app/gallery/gallery.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TekstiStorageService } from 'src/app/shared/teksti-storage.service';


@Component({
  selector: 'app-korjaukset-detail',
  templateUrl: './korjaukset-detail.component.html',
  styleUrls: ['./korjaukset-detail.component.css']
})
export class KorjauksetDetailComponent implements OnInit {

  korjaus: Korjaus;
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
     this.korjaus = this.galleryService.getKorjaus(this.id);
    }
   );
      this.userSub = this.authService.user.subscribe(user => {
       this.isAuthenticated = !!user;
                  
       });
       }
            
  ngOnDestroy() {          
     this.userSub.unsubscribe();
  } 
            
   onEditKorjaus() {
     this.router.navigate(['edit'], {relativeTo: this.route});
            
       }
            
            
   onDeleteKorjaus() {
       this.galleryService.deleteKorjaus(this.id);
       this.router.navigate(['/korjaukset']);
       this.dataStorageService.storeKorjaukset();

   }
              
   onCancel() { 
     
  this.router.navigate(['../'], {relativeTo: this.route}); 
              
    } 
              
              
 }
            