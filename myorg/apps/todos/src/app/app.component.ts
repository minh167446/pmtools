import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'libs/datas/src/lib/datas.module';
import { Employee } from '@myorg/datas';
import {Department} from '@myorg/datas';
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private http: HttpClient) {

  }

}
