import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class ProjectGuardService implements CanActivate {


    canActivate(): boolean {
        // perform check here before returning 'true' or 'false'
        return true;
    }

}
