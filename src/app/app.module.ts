import { ProjectGuardService } from './services/project-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './router/app-router.module';
import { UserLoginComponent } from './accounts/user-login/user-login.component';
import { HighlightsComponent } from './home/highlights/highlights.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { HomeComponent } from './home/home.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectErrorComponent } from './projects/project-error/project-error.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserLoginComponent,
    HighlightsComponent,
    ProjectsListComponent,
    HomeComponent,
    ProjectEditComponent,
    ProjectErrorComponent,
    ProjectViewComponent,
    ProjectNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ProjectGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
