import { Subscription } from 'rxjs';
import { LogingService } from '../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, OnDestroy {
  public email: string;
  public password: string;
  private isLogged = false;
  activateSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }


  onLogIn() {
  }

  onLogOut() {
  }
}
