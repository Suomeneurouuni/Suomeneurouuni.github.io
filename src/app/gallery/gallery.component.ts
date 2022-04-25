import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { Item } from './gallery.model'; 
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TekstiStorageService } from '../shared/teksti-storage.service';



@Component({ 

  selector: 'app-gallery', 
  templateUrl: './gallery.component.html', 
  styleUrls: ['./gallery.component.css'] 

}) 

export class GalleryComponent implements OnInit { 
  selectedItem: Item; 
  isAuthenticated = false;
  display = false;
  private userSub: Subscription;


  constructor(private authService: AuthService,
              public router: Router, 
              public tekstiStorageService: TekstiStorageService,
              public route: ActivatedRoute,
              private dataStorageService: DataStorageService) { 
  } 

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
    this.dataStorageService.fetchItems().subscribe(); 
    
   

  }

}