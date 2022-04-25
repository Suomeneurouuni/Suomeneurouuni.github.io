import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Remontti } from '../remontit.model';
import { GalleryService } from 'src/app/gallery/gallery.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TekstiStorageService } from 'src/app/shared/teksti-storage.service';


@Component({
  selector: 'app-remontit-detail',
  templateUrl: './remontit-detail.component.html',
  styleUrls: ['./remontit-detail.component.css']
})
export class RemontitDetailComponent implements OnInit {

  remontti: Remontti;
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
     this.remontti = this.galleryService.getRemontti(this.id);
    }
   );
      this.userSub = this.authService.user.subscribe(user => {
       this.isAuthenticated = !!user;
                  
       });
       }
            
  ngOnDestroy() {          
     this.userSub.unsubscribe();
  } 
            
   onEditRemontti() {
     this.router.navigate(['edit'], {relativeTo: this.route});
            
       }
            
            
   onDeleteRemontti() {
       this.galleryService.deleteRemontti(this.id);
       this.router.navigate(['/remontit']);
       this.dataStorageService.storeRemontit();

   }
              
   onCancel() { 
     
  this.router.navigate(['../'], {relativeTo: this.route}); 
              
    } 
              
              
 }
            