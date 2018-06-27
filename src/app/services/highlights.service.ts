import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class HighlightsService {
    private info = {
        totalBeckers: 148901493,
        fundedProjects: 145647,
        liveProjects: 3877
    };

    getInfo(): Observable<any> {
        return of(this.info);
    }

    addFundedProjects(): void {
        ++this.info.fundedProjects;
    }
}
