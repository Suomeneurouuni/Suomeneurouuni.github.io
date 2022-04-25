
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TekstiStorageService } from '../shared/teksti-storage.service';
import { TekstiService } from '../gallery/teksti.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private scroller: ViewportScroller,
    private router: Router,
    private dataStorageService: DataStorageService,
    private tekstiStorageService: TekstiStorageService,
    private authService: AuthService) { }


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  goDown1() {
    this.scroller.scrollToAnchor("targetGalleria");
  }

  goDown2() {

    document.getElementById("targetPalvelut").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goDown3() {

    document.getElementById("targetYhteistiedot").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  goDown4() {

    document.getElementById("targetVerkkokauppa").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  onSaveData() {
    this.dataStorageService.storeItems();
    this.tekstiStorageService.storeTekstit();
  }

  onFetchData() {
    this.tekstiStorageService.fetchTekstit().subscribe();
    this.dataStorageService.fetchItems().subscribe();


  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  scroll = (): void => {

    let scrollHeigth;

    if (window.innerWidth < 150) {
      scrollHeigth = 10;
    } else if (window.innerWidth < 300 && window.innerWidth > 150) {
      scrollHeigth = 110;
    } else if (window.innerWidth < 400 && window.innerWidth > 300) {
      scrollHeigth = 210;
    } else if (window.innerWidth < 700 && window.innerWidth > 400) {
      scrollHeigth = 310;
    } else {
      scrollHeigth = 1;
    }

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "#FC842B");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
  

    } else if (window.scrollY <= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
     
    }
  }

}