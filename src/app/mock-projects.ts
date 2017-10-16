import {Project} from "./models/project.model";

export var PROJECTS: Project[] = [
  {
    id:3,
    title: "Paid",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum",
    members: [
      {
        id: 1,
        name: 'Lori Lane',
        tasks:[
          {
            id: 1,
            title: 'Publishing View',
            desc: 'Lorem ipsum dolor sit amet, consectetur ',
            status: 'Done'
          },
          {
            id: 2,
            title: 'Icon Creation',
            desc: 'Lorem ipsum dolor sit amet, consectetur',
            status: 'In Process'
          },
          {
            id: 5,
            title: 'Debug View',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            status: 'On Hold'
          }]
      },
      {
        id:2,
        name: 'Robert Martinez',
        tasks: [
          {
            id:3,
            title: 'Lorem ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur ',
            status: 'Done'
          },
          {
            id:4,
            title: 'Lorem2 ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur ',
            status: 'In Process'
          }]
      },
      {
        id:3,
        name: 'Jennifer Lynch',
        tasks:[
          {
            id:6,
            title: 'Lorem2 ipsum',
            desc: 'Lorem ipsum dolor sit amet, consectetur ',
            status: 'In Process'
          }]
      }]
  },
  {
    id:6,
    title: "Core",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    members: [
      {
        id: 1,
        name: 'Lori Lane',
        tasks:[
          {
            id: 7,
            title: 'Lorem ipsum',
            desc: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ',
            status: 'Done'
          },
          {
            id: 8,
            title: 'Lorem2 ipsum',
            desc: 'Lorem2 ipsumLorem ipsumLorem ipsumLorem ipsumLorem ',
            status: 'In Process'
          },
          {
            id: 9,
            title: 'Lorem3 ipsum',
            desc: 'Lorem3 ipsumLorem ipsumLorem ipsumLorem ipsumLorem ',
            status: 'On Hold'
          }]
      },
      {
        id: 3,
        name: 'Jennifer Lynch',
        tasks:[
          {
            id: 10,
            title: 'Lorem2 ipsum',
            desc: 'Lorem2 ipsumLorem ipsumLorem ipsumLorem ipsumLorem ',
            status: 'In Process'
          }]
      }]
  },
  {
    id:2,
    title: "Publishing",
    desc: "Lorem ipsum dolor sit amet, consectetur ",
    members: []
  },
];

// list of sample members
export const MEMBERS = ['Lori Lane', 'Robert Martinez', 'Jennifer Lynch', 'Emily Howard', 'Jonathan Murphy', 'Ronald McCoy', 'Daniel Carter', 'Lauren Scott', 'Thomas Pena'];

//list of task status options
export const STATUS = ['Done', 'On Hold', 'In Process', 'Schedule', 'Sent'];

//list of member options compatible with react-select
export const OPTIONS = MEMBERS.map(function(name) {
  return(
    {value: name, label: name}
  );
});

//list of status options compatible with react-select
export const STATUS_OPTIONS = STATUS.map(function(status) {
  return(
  {value: status, label: status}
  );
});
