import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input('child_name') name: string
  text: string
  constructor() { }

  // on every change of @input 'name', this method will be triggered
  ngOnChanges() {
    this.text = 'Hi ' + this.name
  }

}