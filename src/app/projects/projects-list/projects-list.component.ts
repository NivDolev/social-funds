import { Project } from './../models/project.model';
import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})

export class ProjectsListComponent implements OnInit, OnDestroy {

  activateSubscription: Subscription;
  uniqueCategories: Set<String>;
  selectedCategory = 'all';
  project: Project;

  projectsList: Project[] = [];

  constructor(private projectsService: ProjectsService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.activateSubscription = this.projectsService.getProjects()
      .subscribe(
        (projectList: Project[]) => {
          this.projectsList = projectList;
          this.getUniqueCategories();
        }
      );
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }

  getUniqueCategories(): void {
    const categories: String[] = ['all'];
    this.projectsList.forEach(project => {
      categories.push(project.category);
    });
    this.uniqueCategories = new Set(categories);
  }

  onFiltterProjectList(category: string): void {
    console.log(this._route.snapshot.paramMap.get('category'));
    this.selectedCategory = category;
  }

  addProject(project: Project): void {
    this.projectsService.addProject(project);
  }
}
