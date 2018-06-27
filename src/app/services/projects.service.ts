import { PROJECTS } from '../projects/models/mock-projects';
import { Project } from './../projects/models/project.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    private projectList: Project[];
    constructor() { }

    getProjects(): Observable<Project[]> {
        this.projectList = PROJECTS.slice();
        return of(this.projectList);
    }

    addProject(project: Project): void {
        this.projectList.push(project);
        console.log(this.projectList);
    }

}
