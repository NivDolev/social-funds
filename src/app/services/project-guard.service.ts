import { LogingService } from './login.service';
import { CanActivate, Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class ProjectGuardService implements CanActivate {

    constructor(private loginService: LogingService,
        private router: Router) { }

    canActivate(): boolean {
        // perform check here before returning 'true' or 'false'
        if (this.loginService.loginStatus()) { return true; } else {
            alert('you must log in');
            this.router.navigate(['/login']);
            return false;
        }
    }

}
