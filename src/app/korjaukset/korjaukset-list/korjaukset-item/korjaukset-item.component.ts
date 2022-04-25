import { Component, OnInit, Input } from '@angular/core';
import { Korjaus } from '../../korjaus.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-korjaukset-item',
  templateUrl: './korjaukset-item.component.html',
  styleUrls: ['./korjaukset-item.component.css']
})
export class KorjauksetItemComponent implements OnInit {

  @Input() korjaus: Korjaus; 
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
