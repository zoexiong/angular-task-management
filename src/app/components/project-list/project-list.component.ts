import { Component, OnInit } from '@angular/core';
import { Project } from "../../models/project.model";
// import { PROJECTS } from "../../mock-projects";
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [DataService]
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [];
  showModal: boolean = false;
  subscriptionProjects: Subscription;
  title: string = '';
  desc: string = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  onClose(){
    this.showModal = false;
  }

  onSubmit() {
    this.dataService.addProject({
      id:10,
      title: this.title,
      desc: this.desc,
      members: []
    });
    this.showModal = false;
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.dataService.getProjects();
    // console.log('A');
    // this.subscriptionProjects = this.dataService.getProjects()
    //   .subscribe(projects => this.projects = projects);
  }

  toggleAddNew(): void {
    this.showModal = !this.showModal;
    // this.projects = this.dataService.addProject({
    //   id:8,
    //   title: "test",
    //   desc: "Lorem ipsum dolor sit amet, consectetur ",
    //   members: []
    // })
  }

}


