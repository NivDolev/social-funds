import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})

export class ProjectsListComponent implements OnInit , OnDestroy {

  projectsList: Project[];
  activateSubscription: Subscription;
  uniqueCategories: Set<String>;
  selectedCategory: String = 'all';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.activateSubscription = this.projectsService.getProjects(this.selectedCategory)
    .subscribe((projects => this.projectsList = projects));
    this.getUniqueCategories();
  }

  ngOnDestroy(): void {
    this.activateSubscription.unsubscribe();
  }

  getUniqueCategories(): void {
    const categories: String[] = [this.selectedCategory];
    this.projectsList.forEach(project => {
      categories.push(project.category);
    });
    this.uniqueCategories = new Set(categories);
  }

  onFiltterProjectList(category: String): void {
    this.selectedCategory = category.toLowerCase();
    this.projectsService.getProjects(this.selectedCategory);
  }
}
