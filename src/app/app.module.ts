import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './router/app-router.module';
import { UserLoginComponent } from './accounts/user-login/user-login.component';
import { HighlightsComponent } from './home/highlights/highlights.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HomeComponent } from './home/home.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectErrorComponent } from './projects/project-error/project-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserLoginComponent,
    HighlightsComponent,
    ProjectsListComponent,
    HomeComponent,
    ProjectEditComponent,
    ProjectErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
