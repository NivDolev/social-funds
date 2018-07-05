import { Subscription } from 'rxjs';
import { LogingService } from '../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit, OnDestroy {

  public isLogged: boolean;
  activateSubscription: Subscription;

  loginForm: FormGroup;

  constructor(
    private loginService: LogingService,
    private fb: FormBuilder,
    private router: Router) {

    this.creatForm();
  }

  creatForm() {
    this.loginForm = this.fb.group({
      loginDetails: this.fb.group({
        email: ['', Validators.required ],
        password: ['', Validators.required ],
      }),
      remmember: false
    });
  }

  ngOnInit() {
    this.subScribeToLogin();
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }

  subScribeToLogin() {
    this.activateSubscription = this.loginService.getLoginStatus()
      .subscribe(
        (logged: boolean) => {
          this.isLogged = logged;
        });
  }

  onSubmit() {
    if (!this.isLogged) {
      // console.log('user is loged out, attemting to log in');
      if (this.loginForm.valid) {
        // console.log('form is valid, calling "onLogIn"');
        this.onLogIn();
        this.loginForm.reset();
        this.router.navigate(['/index']);
    } else {
      // console.log('form is invalid!');
      this.onLogOut();
      }
    } else {
      // console.log('user is logged in, attempting to log out');
      this.onLogOut();
    }
  }

  onLogIn() {
    const login = new User(
      this.loginForm.get('loginDetails.email').value,
      this.loginForm.get('loginDetails.password').value
    );
    // console.log('calling loging service with user details: ', login);
    this.loginService.logIn(login);
  }

  onLogOut() {
    this.loginService.logOut();
  }
}
