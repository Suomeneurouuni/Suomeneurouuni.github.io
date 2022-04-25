import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Remontti } from '../../remontit.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-remontit-item',
  templateUrl: './remontit-item.component.html',
  styleUrls: ['./remontit-item.component.css']
})
export class RemontitItemComponent implements OnInit {

  @Input() remontti: Remontti; 
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
