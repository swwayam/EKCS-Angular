import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  // User Name And Age From The Form
  userName!: string;
  userAge!: number;

  // Display Related
  displayForm = true;
  displayYTKids = false;
  displayYT = false;
  displayError = false;

  // When Login Form is Clicked The Name Value and Age Value is Passed
  login(name: string, age: string): boolean {
    this.userName = name;
    this.userAge = parseInt(age);
    

    if (this.userAge < 13) {
      this.displayYTKids = true;
      this.displayForm = false;
    }

    return false;
  }
}
