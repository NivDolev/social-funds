import { Subscription } from 'rxjs';
import { LogingService } from '../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit, OnDestroy {

  public email = '';
  public password = '';
  public isLogged: boolean;
  activateSubscription: Subscription;

  constructor(private loginService: LogingService) { }

  ngOnInit() {
    this.activateSubscription = this.loginService.getLoginStatus()
      .subscribe(
        (logged: boolean) => {
          this.isLogged = logged;
        });
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }


  onLogIn() {
    this.loginService.login({email: this.email, password: this.password});
  }

  onLogOut() {
    this.loginService.logout();
  }
}
