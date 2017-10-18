import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project.model";
import { OPTIONS } from "../../mock-projects";

import { DataService } from '../../services/data.service';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [DataService]
})

export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  showModal: boolean = false;
  title: string = '';
  desc: string = '';

  members: SelectItem[];
  selectedMembers: string[];

  constructor(private dataService: DataService) {
    this.members = OPTIONS;
    //console.log(this.members);
  }

  ngOnInit() {
    this.getProjects();
  }

  onClose(){
    this.showModal = false;
  }

  onSubmit() {
    //var tasks: Task[] = [];
    var members = this.selectedMembers.map(function(name) {
      return(
      {name: name, tasks: []}
      );
    });
    this.dataService.addProject({
      id:10,
      title: this.title,
      desc: this.desc,
      members: members
    });
    this.showModal = false;
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.dataService.getProjects();
  }

  toggleAddNew(): void {
    this.showModal = !this.showModal;

  }

}





