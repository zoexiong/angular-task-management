import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { OPTIONS, STATUS_OPTIONS, STATUS } from "../../mock-projects";
//get route params
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import {SelectItem} from 'primeng/primeng';
import _ from 'lodash';
import { SortablejsOptions } from 'angular-sortablejs';

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
  selectedStatus: string = 'Schedule';
  submitDisabled: boolean = true;

  addNewMember: boolean = false;
  selectedMembers: string[] = [];
  statusList: string[] = [];

  options: SortablejsOptions = {
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) {
    this.status = STATUS_OPTIONS;
    this.options = {
      group: 'members',
      animation: 500,
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      scrollSpeed: 1, // px
      delay: 100,
      onEnd: (event: any) => {
        this.onDnd(event);
      }
    };
  };

  onDnd(evt): void {
    this.dataService.updateProject(this.project, this.projectIndex);
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

  //when user click "add new task" card, only the clicked one will change to hover style
  cardActiveStatus(memberIndex): boolean {
    return (memberIndex === this.memberIndex && this.addNewTask);
  }

  onClose(){
    this.addNewTask = false;
  }

  descOnChange(value) {
    this.desc = value;
    this.onChange();
  }

  titleOnChange(value) {
    this.title = value;
    this.onChange();
  }

  onChange(): void {
    if (this.title != "" && this.desc != ""){
      this.submitDisabled = false;
    } else {
      this.submitDisabled = true;
    }
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

  changeStatus(memberIndex, i, status): void {
    this.project.members[memberIndex].tasks[i].status = status;
    this.dataService.updateProject(this.project, this.projectIndex);
    this.getProject(this.projectIndex);
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log('param is' + params['id']);
      this.projectIndex = params['id'];
      this.getProject(params['id']);
      this.statusList = STATUS;
    });
  }
}


