import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { USERS } from '../accounts/models/mock-users';
import { User } from '../accounts/models/user.model';


@Injectable({ providedIn: 'root' })
export class LogingService {
    public _isLoggedObs: Subject<boolean>;
    private isLogged = false;
    private usersList: User[];

    constructor() {
        this._isLoggedObs = new BehaviorSubject<boolean>(this.isLogged);
        this.usersList = USERS.slice();
    }

    getLoginStatus(): Observable<boolean> {
        return this._isLoggedObs.asObservable();
    }

    loginStatus(): boolean {
        return this.isLogged;
    }

    login(_user: User): void {
        console.log(_user);
        this.usersList.forEach(user => {
            if (user.email === _user.email && user.password === _user.password) {
                this.isLogged = true;
                this._isLoggedObs.next(this.isLogged);
            }
        });
        if (!this.isLogged) { alert('Username or password incorrect'); }
    }

    logout(): void {
        this.isLogged = false;
        this._isLoggedObs.next(this.isLogged);
    }

}
