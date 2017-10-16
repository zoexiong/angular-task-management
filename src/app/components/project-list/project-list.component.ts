import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project.model";
import { PROJECTS } from "../../mock-projects";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  addNew: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = PROJECTS;
  }

  toggleAddNew(): void {
    this.addNew = !this.addNew;
  }

}


