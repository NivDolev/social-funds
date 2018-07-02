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

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {

  }

  onAddProject(project: Project): void {
    this.projectsService.addProject(project);
  }

  onSubmit(): void {
    console.log(this.newProject.value.ProjectData.date);
    if (this.newProject.valid) {
      const project: Project = new Project(
        this.newProject.value.ProjectData.title,
        this.newProject.value.ProjectData.date,
        this.newProject.value.ProjectData.amount,
        this.newProject.value.ProjectData.category
      );
      this.onAddProject(project);
      this.submitted = true;
      this.newProject.reset();
      console.log(project);
    } else {
      console.log('invalid');
    }
  }
}

