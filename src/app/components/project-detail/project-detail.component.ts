import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { PROJECTS, STATUS } from "../../mock-projects";
//get route params
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  addNewTask: boolean = false;
  addNewMember: boolean = false;
  members = [];
  statusList = STATUS;

  constructor(
    private route: ActivatedRoute) {
  }

  getProject(id): void {
    this.project = PROJECTS[id-1];
    this.members = this.project.members;
  }

  toggleAddTask(): void {
    this.addNewTask = !this.addNewTask;
  }

  toggleAddMember(): void {
    this.addNewMember = !this.addNewMember;
  }

  getStyle(status): string {
    var color = '';
    if (status === 'Done') {
      color = 'mediumseagreen';
    } else if (status === 'On Hold') {
      color = 'red';
    } else if (status === 'In Process') {
      color = 'orange';
    } else if (status === 'Schedule') {
      color = 'lightblue';
    } else if (status === 'Sent') {
      color = 'lightgray';
    }
    return color
  }

  // getStatusOptions(taskIndex) {
  //   return CONSTS.STATUS.map(function(status, i){
  //     return(
  //       // the index of the task will be added to the <li> element's onClick function
  //       // we can then update the status of the task accordingly
  //       <li key={i}><a onClick={(e) => {this.changeStatus(status, taskIndex)}}>{status}</a></li>
  //     )
  //   }, this);
  // };

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('param is' + params['id']);
      this.getProject(params['id']);
    });
  }

}


