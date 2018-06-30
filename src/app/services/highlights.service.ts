import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';


@Injectable( { providedIn: 'root' } )
export class HighlightsService {
    private _info: Subject<any>;
    private info = {
        totalBeckers: 148901493,
        fundedProjects: 145647,
        liveProjects: 3877
    };

    constructor() {
        this._info = new BehaviorSubject<any>(this.info);
    }

    getInfo(): Observable<any> {
        return this._info.asObservable();
    }

    addFundedProjects(): void {
        ++this.info.fundedProjects;
        this._info.next(this.info);
    }
}
