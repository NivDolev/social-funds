import { ProjectsService } from './../../services/projects.service';
import { Project } from './../models/project.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit , OnDestroy{
  project: Project;
  activateSubscription: Subscription;
  id: number;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _location: Location,
              private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProject();
  }

  ngOnDestroy() {
    this.activateSubscription.unsubscribe();
  }

  getProject(): void {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.activateSubscription = this.projectsService.getProject(this.id)
      .subscribe(project => this.project = project);
  }

  onBack(): void {
    this._location.back();
  }

}
