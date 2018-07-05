import { Subscription } from 'rxjs';
import { LogingService } from './../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit , OnDestroy{

  activcatedSubscription: Subscription;
  private _isLogged: boolean;
  get isLogged(): boolean {
    return this._isLogged;
  }
  constructor(private logingService: LogingService) { }

  ngOnInit() {
    this.registerLogin();
  }

  ngOnDestroy() {
    this.activcatedSubscription.unsubscribe();
  }

  registerLogin(): void {
    this.activcatedSubscription = this.logingService.getLoginStatus()
    .subscribe(
      (logged: boolean) => {
        this._isLogged = logged;
      }
    );
  }
}
