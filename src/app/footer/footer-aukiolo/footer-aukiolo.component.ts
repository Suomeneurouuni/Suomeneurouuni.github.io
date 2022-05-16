import { Component, OnInit, Input } from '@angular/core';
import { Teksti } from 'src/app/gallery/teksti.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-footer-aukiolo',
  templateUrl: './footer-aukiolo.component.html',
  styleUrls: ['./footer-aukiolo.component.css']
})
export class FooterAukioloComponent implements OnInit {
    isAuthenticated = false;
    private userSub: Subscription;
  
    @Input() teksti: Teksti; 
    @Input() index: number;
    
    constructor(private router: Router,
                private authService: AuthService) { }
  
    ngOnInit(): void {
  
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !!user;
      
      });
  
  
    }
  
    ngOnDestroy() {
      this.userSub.unsubscribe();
        }
  }
  