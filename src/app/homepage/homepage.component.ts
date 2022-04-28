import { Component, OnInit } from '@angular/core';
import { TekstiStorageService } from '../shared/teksti-storage.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  display = false;
  isAuthenticated = false;
  private userSub: Subscription;


  constructor(private tekstiStorageService: TekstiStorageService,
         private authService: AuthService,
              public router: Router,) { }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
      this.tekstiStorageService.fetchTekstit().subscribe(); 

  
 

}

onPress() {
  this.display = ! this.display;
  if (this.display = this.display) {
    this.router.navigate(['/auth']);
  
  } else {
    this.router.navigate(['../'])
  }
}}
