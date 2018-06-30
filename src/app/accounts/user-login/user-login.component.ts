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
  public isLogged = false;
  activateSubscription: Subscription;

  constructor(private loginService: LogingService) { }

  ngOnInit() {
    this.activateSubscription = this.loginService.getLoginStatus()
      .subscribe(isLogged => {
        this.isLogged = isLogged;
        console.log(this.isLogged);
      }
      );
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }


  onLogIn() {
    this.loginService.login();
    console.log(this.isLogged);
  }

  onLogOut() {
    this.loginService.logout();
    console.log(this.isLogged);
  }
}
