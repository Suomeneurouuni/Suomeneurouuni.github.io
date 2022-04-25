import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { Item } from '../gallery/gallery.model';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Korjaus } from './korjaus.model';

@Component({ 

  selector: 'app-korjaukset', 
  templateUrl: './korjaukset.component.html', 
  styleUrls: ['./korjaukset.component.css'] 

}) 

export class KorjauksetComponent implements OnInit { 
  selectedKorjaus: Korjaus; 
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService,
             private dataStorageService: DataStorageService) { 
  } 

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.dataStorageService.fetchKorjaukset().subscribe(); 

  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
} 

 
 