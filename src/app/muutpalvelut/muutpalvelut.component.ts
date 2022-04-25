import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Palvelu } from './muutpalvelut.model';

@Component({ 

  selector: 'app-muutpalvelut', 
  templateUrl: './muutpalvelut.component.html', 
  styleUrls: ['./muutpalvelut.component.css'] 

}) 

export class MuutpalvelutComponent implements OnInit { 
  selectedPalvelu: Palvelu; 
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService,
             private dataStorageService: DataStorageService) { 
  } 

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.dataStorageService.fetchPalvelut().subscribe(); 

  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
} 

 
 