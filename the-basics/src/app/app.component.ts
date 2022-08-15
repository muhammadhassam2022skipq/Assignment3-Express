import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { myDetails } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myItems: Array<myDetails> = [];


  addPersonalDetail(y: myDetails) {
    this.myItems.push(y);
  }
  Hassam : myDetails [] = [
    {
      firstName: "Hassam",
      age : 25
    }
  ]
}
