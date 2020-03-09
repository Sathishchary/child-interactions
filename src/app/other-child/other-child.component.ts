import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-child',
  templateUrl: './other-child.component.html',
  styleUrls: ['./other-child.component.css']
})
export class OtherChildComponent implements OnInit {

  @Input('child_name') name: string
  text: string
  constructor() { }

  // on every change of @input 'name', this method will be triggered
  ngOnInit() {
    this.text = 'Hi ' + this.name
  }

}