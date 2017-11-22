import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-stydent',
  templateUrl: './stydent.component.html',
  styleUrls: ['./stydent.component.css']
})
export class StydentComponent implements OnInit {

  name: string = 'Luke'
  isJedi: boolean = true

  constructor() { }

  ngOnInit() {
  }

}
