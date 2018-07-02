import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LogingService {
    public _isLoggedObs: Subject<boolean>;
    private isLogged = false;

    constructor() {
        this._isLoggedObs = new BehaviorSubject<boolean>(this.isLogged);
    }

    getLoginStatus(): Observable<boolean> {
        return this._isLoggedObs.asObservable();
    }

    login(): void {
        this.isLogged = true;
        this._isLoggedObs.next(this.isLogged);
    }

    logout(): void {
        this.isLogged = false;
        this._isLoggedObs.next(this.isLogged);
    }

}
