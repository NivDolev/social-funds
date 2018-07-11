import { ProjectsService } from './../../services/projects.service';
import { Project } from './../models/project.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {
  project: Project;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private projectsService: ProjectsService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.project = this.projectsService.getProject(id);
  }

  onBack(): void {
    this._router.navigate(['/projects/explore/all']);
  }

}
