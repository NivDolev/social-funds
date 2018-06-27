import { PROJECTS } from '../projects/models/mock-projects';
import { Project } from './../projects/models/project.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class ProjectsService {

    constructor() {}

    getProjects(category: String): Observable<Project[]> {
        if (category === 'all') {
            return of(PROJECTS);
        } else {
            return of(PROJECTS.filter(project => project.category === category));
        }
    }

    addProject(project: Project) {
        PROJECTS.push(project);
    }

}
