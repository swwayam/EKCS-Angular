import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
    page: number = 0;
    
    add(){
      this.page++;
    }

    sub(){
      this.page--;
    }
}
