import { Component, Input, OnInit } from '@angular/core';
import { myDetails } from '../model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input () data!: myDetails 
  constructor() { }

  ngOnInit(): void {
  }

}
