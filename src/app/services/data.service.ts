import { Injectable} from '@angular/core';
import { Project } from "../models/project.model";
import * as data from "../mock-projects";
import _ from 'lodash';

@Injectable()
export class DataService {

  projects: Project[];

  constructor() { }

  getProjects(): Project[] {
    if (!localStorage['projects']) {
      localStorage.setItem('projects', JSON.stringify({data: data.PROJECTS}));
    }
    return JSON.parse(localStorage['projects']).data;
  }

  getProject(index: number): Project {
    return JSON.parse(localStorage['projects']).data[index];
  }

  addProject(project: Project): void {
    var projects = _.clone(JSON.parse(localStorage['projects']).data);
    localStorage.setItem('projects', JSON.stringify({data: projects.concat(project)}));
  }

  updateProject(project: Project, index: number): void {
    var projects = _.clone(JSON.parse(localStorage['projects']).data);
    projects[index] = project;
    localStorage.setItem('projects', JSON.stringify({data: projects.concat(project)}));
  }
}
