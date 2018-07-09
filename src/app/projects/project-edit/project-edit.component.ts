import { Location } from '@angular/common';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
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

  private project: Project;
  private _id: number;
  get id() { return this._id; }
  foundProject = false;

  projectData: FormGroup;
  get title() { return this.projectData.get('title'); }
  get endDate() { return this.projectData.get('endDate'); }
  get amount() { return this.projectData.get('amount'); }
  get category() { return this.projectData.get('category'); }

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location) {

    this.createForm();
  }

  ngOnInit() {
    this.getProject();
    this.convetDateToString(new Date());
  }

  createForm() {
    this.projectData = this.fb.group({
      title: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      amount: ['', [Validators.required, this.validateAmount.bind(this)]],
      category: ['', [Validators.required]],
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
    this.foundProject = false;
    this._id = +this.route.snapshot.paramMap.get('id');
    if (this._id > 0) {
      this.project = this.projectsService.getProject(this.id);
      this.updateProjectForm(this.project);
      this.foundProject = true;
    }
  }

  updateProjectForm(project: Project) {
    this.projectData.patchValue({
      id: project.id,
      title: project.title,
      endDate: this.convetDateToString(new Date()),
      amount: project.amount,
      category: project.category,
    });
  }

  updateProject(): void {

  }

  cancel(): void {
    this.location.back();
  }
  save() {

  }

  convetDateToString(date: Date): string {
    return date.toJSON().slice(0, 10);
  }

  // Form Validators
  validateAmount(control: FormControl): { [errorCode: string]: boolean } {
    try {
      if (+control.value < 1) {
        return { 'Amount is smaller then 1': true };
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }
}
