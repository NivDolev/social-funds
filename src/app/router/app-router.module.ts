import { ProjectNewComponent } from './../projects/project-new/project-new.component';
import { ProjectGuardService } from './../services/project-guard.service';
import { ProjectViewComponent } from './../projects/project-view/project-view.component';
import { ProjectEditComponent } from './../projects/project-edit/project-edit.component';
import { HomeComponent } from './../home/home.component';
import { ProjectsListComponent } from './../projects/projects-list/projects-list.component';
import { UserLoginComponent } from './../accounts/user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'index', component: HomeComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'projects/explore/:category', component: ProjectsListComponent},
    { path: 'projects/explore', component: ProjectsListComponent},
    { path: 'projects/new', canActivate: [ProjectGuardService], component: ProjectNewComponent },
    { path: 'projects/:id', component: ProjectViewComponent },
    { path: 'projects/:id/edit', component: ProjectEditComponent },
    { path: 'projects', redirectTo: 'projects/explore/all', pathMatch: 'full' },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
