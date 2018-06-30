import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LogingService {
    private _isLogged: Subject<boolean>;
    private isLogged = false;

    constructor() {
        this._isLogged = new BehaviorSubject<boolean>(this.isLogged);
    }

    getLoginStatus(): Observable<boolean> {
        return this._isLogged.asObservable();
    }

    login(): void {
        this.isLogged = true;
        this._isLogged.next(this.isLogged);
    }

    logout(): void {
        this.isLogged = false;
        this._isLogged.next(this.isLogged);
    }
}
