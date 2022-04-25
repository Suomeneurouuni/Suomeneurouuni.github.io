import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';  
import { Teksti } from 'src/app/gallery/teksti.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({  

  selector: 'app-topics-show',  
  templateUrl: './topics-show.component.html',  
  styleUrls: ['./topics-show.component.css']  

})  

export class TopicsShowComponent implements OnInit {  
  isAuthenticated = false;
  private userSub: Subscription;
  display = true;
  @Input() teksti: Teksti; 
  @Input() index: number;

  
  constructor(private router: Router,
              private authService: AuthService) { } 

  ngOnInit() {  
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    
    });

    if (this.teksti.text) {
      this.display = true
       } else {
          this.display = false
 
   }  
 }  


  ngOnDestroy() {
  this.userSub.unsubscribe();
    }



}  