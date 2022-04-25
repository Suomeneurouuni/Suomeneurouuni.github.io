import { Component, OnInit, Input } from '@angular/core';
import { Palvelu } from '../../muutpalvelut.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-muutpalvelut-item',
  templateUrl: './muutpalvelut-item.component.html',
  styleUrls: ['./muutpalvelut-item.component.css']
})
export class MuutpalvelutItemComponent implements OnInit {

  @Input() palvelu: Palvelu; 
  @Input() index: number; 
  isAuthenticated = false;
  subscription: Subscription; 
  private userSub: Subscription;

  constructor( private authService: AuthService,) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
                 
      });
  }

}
