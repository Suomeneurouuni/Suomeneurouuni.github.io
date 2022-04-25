import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  
import { Teksti } from '../../teksti.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({  

  selector: 'app-gallery-text-show',  
  templateUrl: './gallery-text-show.component.html',  
  styleUrls: ['./gallery-text-show.component.css']  

})  

 
 

export class GalleryTextShowComponent implements OnInit {  
  isAuthenticated = false;
  private userSub: Subscription;

  @Input() teksti: Teksti; 
  @Input() index: number;

  constructor(private router: Router,
              private authService: AuthService) { } 

  ngOnInit() {  
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    
    });

 }  

 ngOnDestroy() {
  this.userSub.unsubscribe();
    }

}  