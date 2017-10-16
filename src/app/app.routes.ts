import {Routes, RouterModule} from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "projects",
    pathMatch: "full"
  },
  {
    path: "projects",
    component: ProjectListComponent
  },
  {
    path: "projects/:id",
    component: ProjectDetailComponent
  },
  {
    path: "**",
    redirectTo: "projects"
  }
];

export const routing = RouterModule.forRoot(routes);
