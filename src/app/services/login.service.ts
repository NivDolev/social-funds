import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable()
export class LogingService {
    public isLogged = false;

    redirectUrl: string;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLogged = true)
        );
    }

    logout(): void {
        this.isLogged = false;
    }
}
