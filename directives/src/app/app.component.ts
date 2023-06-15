import { Component } from '@angular/core';
import {data} from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = data;
  addNew = false;
  display = false;
  btn = true;

  displayEmp(){
    this.btn = false;
    this.display = true
  }
  
  displayEmpForm(){
    this.btn = false;
    this.addNew = true
  }

  showHome(){
    this.btn = true;
    this.display = false;
    this.addNew = false;
  }
}
