import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-add-member',
  template: `
    <h2>Drag / drop the item</h2>
    <h3>list 1</h3>
    <div class="items2" (change)="onUpdate()" sortablejs [sortablejsOptions]="options">
      <div *ngFor="let item of items2">{{ item }}</div>
    </div>
    <h3>list 2</h3>

    <div class="items3" (change)="onUpdate()" sortablejs [sortablejsOptions]="options">
      <div *ngFor="let item of items3">{{ item }}</div>
    </div>
    `
})

export class AddMemberComponent {

  options = {};

  constructor() {
    this.options = {
      group: 'test',
      sort: false,
      onUpdate: (event: any) => {
        //var itemEl = event.item;  // dragged HTMLElement
        console.log(event.to, event.from, event.oldIndex, event.newIndex);
      }
    };
  }

  items3 = ['Lori Lane', 'Robert Martinez', 'Jennifer Lynch', 'Emily Howard', 'Jonathan Murphy', 'Ronald McCoy'];
  items2 = ['Done', 'On Hold', 'In Process', 'Schedule', 'Sent'];
  // options: SortablejsOptions = {
  //   group: 'test',
  //   // onUpdate: function (evt) {
  //   //   var itemEl = evt.item;  // dragged HTMLElement
  //   //   console.log(evt.to, evt.from, evt.oldIndex, evt.newIndex);
  //   // }
  // };
}
