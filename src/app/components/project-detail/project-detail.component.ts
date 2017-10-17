import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { OPTIONS, STATUS_OPTIONS } from "../../mock-projects";
//get route params
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import {SelectItem} from 'primeng/primeng';
import _ from 'lodash';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [DataService]
})
export class ProjectDetailComponent implements OnInit {

  project: Project;
  projectIndex: number;
  members = [];
  memberIndex: number;
  membersOptions = [];

  addNewTask: boolean = false;
  title: string = '';
  desc: string = '';
  status: SelectItem[];
  selectedStatus: string = 'Done';

  addNewMember: boolean = false;
  selectedMembers: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {
    this.status = STATUS_OPTIONS;
  }

  getProject(id): void {
    this.project = this.dataService.getProject(id);
    this.members = this.project.members;
    this.membersOptions = this.filterOptions(this.members, OPTIONS);
  }

  toggleAddTask(memberIndex): void {
    this.memberIndex = memberIndex;
    this.addNewTask = !this.addNewTask;
  }

  onClose(){
    this.addNewTask = false;
  }

  onSubmit() {
    let project = _.clone(this.project);
    let tasks = _.clone(this.project.members[this.memberIndex].tasks);
    var id = tasks.length;
    project.members[this.memberIndex].tasks = tasks.concat({
      id: id,
      title: this.title,
      desc: this.desc,
      status: this.selectedStatus
    });

    console.log(this.projectIndex);
    this.dataService.updateProject(project, this.projectIndex);
    this.addNewTask = false;
    this.getProject(this.projectIndex);
  }

  toggleAddMember(): void {
    this.addNewMember = !this.addNewMember;
  }

  closeAddMember(): void {
    this.addNewMember = false;
  }

  submitAddMember() {
    if (this.selectedMembers) {
      var members = this.selectedMembers.map(function(name) {
        return(
        {name: name, tasks: []}
        );
      });
      //concat new selected members to the members list stored in state
      members = this.members.concat(members);

      let project = _.clone(this.project);
      project.members = members;

      this.project = project;
      this.dataService.updateProject(this.project, this.projectIndex);
      this.selectedMembers = [];
      this.getProject(this.projectIndex);
      this.addNewMember = false;
    }
  }

  filterOptions(members, options) {
    var names = [];
    for (var i=0; i<members.length; i++) {
      names.push(members[i].name);
    }
    options = options.slice();
    var filteredOptions = options.filter(function(option) {
      return names.indexOf(option.value) < 0;
    });
    return filteredOptions
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
      // console.log('param is' + params['id']);
      this.projectIndex = params['id'];
      this.getProject(params['id']);
    });
  }
}


