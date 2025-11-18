import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';

@Component({
  selector: 'app-todo-dashboared',
  templateUrl: './todo-dashboared.component.html',
  styleUrls: ['./todo-dashboared.component.scss'],
})
export class TodoDashboaredComponent implements OnInit {
  todoArray: Array<Itodo> = [
    {
      todoitem: 'javascript',
      todoid: '123',
    },
    {
      todoitem: 'Angular',
      todoid: '124',
    },
    {
      todoitem: 'Rxjs',
      todoid: '125',
    },
    {
      todoitem: 'Ngrx',
      todoid: '126',
    },
    {
      todoitem: 'sass',
      todoid: '127',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  getnewtodo(todo: Itodo) {
    this.todoArray.push(todo);
  }
}
