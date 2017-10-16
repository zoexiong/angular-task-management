import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { ProjectListCardComponent } from './components/project-list-card/project-list-card.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

import { routing } from "./app.routes";
import { AddMemberComponent } from './components/add-member/add-member.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    TaskDetailComponent,
    ProjectListCardComponent,
    AddTaskComponent,
    AddProjectComponent,
    MemberDetailComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
