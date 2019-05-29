import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'libs/datas/src/lib/datas.module';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
