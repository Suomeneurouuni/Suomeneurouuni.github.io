import { Component, OnInit, Input } from '@angular/core';
import { Teksti } from 'src/app/gallery/teksti.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-korjaukset-text',
  templateUrl: './korjaukset-text.component.html',
  styleUrls: ['./korjaukset-text.component.css']
})
export class KorjauksetTextComponent implements OnInit {
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
