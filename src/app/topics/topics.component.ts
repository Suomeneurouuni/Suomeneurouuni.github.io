 

import { Component, OnInit} from '@angular/core';  
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';  

import { TekstiService } from '../gallery/teksti.service';
import { Teksti } from '../gallery/teksti.model';
import { Input } from '@angular/core';

@Component({  

  selector: 'app-topics',  
  templateUrl: './topics.component.html',  
  styleUrls: ['./topics.component.css']  

})  

export class TopicsComponent implements OnInit {  
  isAuthenticated = false;
  private userSub: Subscription;
  display = false;
  tekstit: Teksti[]; 
  subscription: Subscription;  
  @Input() index: number; 
 
  
  constructor(private tekstiService: TekstiService, 
             private authService: AuthService) {  }  


  ngOnInit() {  
     this.subscription = this.tekstiService.tekstitChanged  
  .subscribe(  
     (tekstit: Teksti[]) => {  
     this.tekstit = tekstit });  

  this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user});

  this.tekstit = this.tekstiService.getTekstit();  



 }  
} 