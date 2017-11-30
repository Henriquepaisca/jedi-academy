import { Component, OnInit, Input } from '@angular/core';

import {Student} from './student.model'

@Component({
  selector: 'jad-stydent',
  templateUrl: './stydent.component.html',
  styleUrls: ['./stydent.component.css']
})
export class StydentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  ngOnInit() {
  }

}
