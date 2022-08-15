import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { myDetails } from '../model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output() myPersonalDetail = new EventEmitter<myDetails>();

  constructor() {
  }

  ngOnInit(): void {
  }
  name!: string
  age!: number

  communicatingWithChild(): void {
    const aboutMe = {
      firstName: this.name,
      age: this.age
    }
    this.myPersonalDetail.emit(aboutMe);
  }

}
