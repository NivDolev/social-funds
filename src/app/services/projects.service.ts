import { PROJECTS } from '../projects/models/mock-projects';
import { Project } from './../projects/models/project.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    private projectList: Project[] = [];
    constructor(private _http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        this.projectList = PROJECTS.slice();
        return of(this.projectList);
    }

    addProject(project: Project): void {
        console.log(project);
        // this.projectList.push(project);
    }

    // tslint:disable-next-line:member-ordering
    private _projectUrl = './src/api/projects/projects.json';

    getHttpProjects(): Observable<Project[]> {
        return this._http.get<Project[]>(this._projectUrl);
    }

    getProject(id: number): Observable<Project> {
        return of(this.projectList.find(project => project.id === id));
    }

}
