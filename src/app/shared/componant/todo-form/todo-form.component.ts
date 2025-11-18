import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itodo } from '../model/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {

  @Output() emittodo:EventEmitter<Itodo>=new EventEmitter
  constructor() {}

  ngOnInit(): void {}

  ontodoadd(form: NgForm) {
  console.log(form);

  let obj: Itodo = {
    ...form.value,
    todoid: this.uuid(),
  };

  console.log(obj);

  this.emittodo.emit(obj);  // <-- MOST IMPORTANT

  form.reset();
}


  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
