import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../models/project.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @ViewChild('newProject')
  newProject: NgForm;

  submitted = false;
  project: Project = {id: 10, title: '', endDate: new Date(), amount: 0, category: '' };

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

  }

  onAddProject(): void {
    // this.projectsService.addProject();
  }

  onSubmit(): void {
    this.submitted = true;
    this.project.title = this.newProject.value.ProjectData.title;
    this.project.amount = this.newProject.value.ProjectData.amount;
    this.project.category = this.newProject.value.ProjectData.category;
    this.project.endDate = new Date();
  }
}

