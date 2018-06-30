import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class LogingService {
    private isLogged = false;

    redirectUrl: string;

    getLoginStatus(): Observable<boolean> {
        return of(this.isLogged).pipe(
            delay(1000));
    }

    login(): void {
        this.isLogged = true;
    }

    logout(): void {
        this.isLogged = false;
    }
}
