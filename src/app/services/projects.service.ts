import { PROJECTS } from './../projects/models/mock-projects';
import { Project } from './../projects/models/project.model';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ProjectsService {
    public _projectObs: Subject<Project[]>;
    private projectList: Project[];
    private _projectUrl = './src/api/projects/projects.json';

    constructor(private _http: HttpClient) {
        this.projectList = PROJECTS.slice();
        this._projectObs = new BehaviorSubject<Project[]>(this.projectList);
    }

    getProjects(): Observable<Project[]> {
        return this._projectObs.asObservable();
    }

    addProject(project: Project): void {
        this.projectList.push(project);
        this._projectObs.next(this.projectList);
    }

    getProject(id: number | string) {
        return this.getProjects()
            .pipe(map(projectslist => projectslist
                .find(project => project.id === +id)));
    }

    getHttpProjects(): Observable<Project[]> {
        return this._http.get<Project[]>(this._projectUrl);
    }

}
