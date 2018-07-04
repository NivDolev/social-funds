import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../models/project.model';
import { NgForm, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  @ViewChild('newProject')
  newProject: NgForm;

  _projectData: FormGroup;
  submitted = false;
  editMode: boolean;

  project: Project;

  constructor(private projectsService: ProjectsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== 0) {
      this.getProject(id);
      this.updateProjectForm();
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.newProject.form.patchValue({
      ProjectData: {
        title: 'test'
      }
    });
  }

  onAddProject(project: Project): void {
    this.projectsService.addProject(project);
  }

  onSubmit(): void {
    console.log(this.newProject.value.ProjectData.date);
    if (this.newProject.valid) {
      this.addNewProject();
    } else {
      this.updateProject();
    }
  }

  getProject(id: number): void {
    this.project = this.projectsService.getProject(id);
  }

  updateProjectForm() {
    this._projectData = new FormGroup({
      title: new FormControl(),
      date: new FormControl(),
      amount: new FormControl(),
      category: new FormControl(),
    });
    this._projectData.patchValue({
      title: this.project.title,
      date: this.project.endDate,
      amount: this.project.amount,
      category: this.project.category
    });
    this.newProject.form.patchValue(this._projectData);
  }

  addNewProject(): void {
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
  }

  updateProject(): void {
    console.log('invalid');
  }
}

