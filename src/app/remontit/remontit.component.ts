import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Remontti } from './remontit.model';

@Component({ 

  selector: 'app-remontit', 
  templateUrl: './remontit.component.html', 
  styleUrls: ['./remontit.component.css'] 

}) 

export class RemontitComponent implements OnInit { 
  selectedRemontti: Remontti; 
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService,
             private dataStorageService: DataStorageService) { 
  } 

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.dataStorageService.fetchRemontit().subscribe(); 

  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
} 

 
 