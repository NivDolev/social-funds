import { ActivatedRoute, CanActivate } from '@angular/router';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../models/project.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  public submitted = false;
  private _editMode: boolean;
  get editMode() {
    return this._editMode;
  }

  projectData: FormGroup;
  get title() { return this.projectData.get('title'); }
  get endDate() { return this.projectData.get('endDate'); }
  get amount() { return this.projectData.get('amount'); }
  get category() { return this.projectData.get('category'); }

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {

    this.createForm();
  }

  ngOnInit() {
    this.getProject();
  }

  createForm() {
    this.projectData = this.fb.group({
      title: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      amount: ['', [Validators.required, this.validateAmount.bind(this)]],
      category: ['', [Validators.required]],
      id: ''
    });
  }


  onSubmit(): void {
    if (this.projectData.valid) {
      console.log('Form is valid');
    } else {
      console.log('form is invalid');
    }
  }

  getProject(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    const project: Project = this.projectsService.getProject(id);
    console.log('Project Data: ', project);
    if (id !== 0) {
      this.updateProjectForm(project);
      this._editMode = true;
    } else {
      this._editMode = false;
    }
  }

  updateProjectForm(project: Project) {
    this.projectData.patchValue({
      id: project.id,
      title: project.title,
      endDate: new Date(),
      amount: project.amount,
      category: project.category
    });
  }

  addNewProject(): void {

  }

  updateProject(): void {

  }

  validateAmount(control: FormControl): {[errorCode: string]: boolean} {
    try {
      if (+control.value < 1) {
        return {'Amount is smaller then 1': true};
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}

