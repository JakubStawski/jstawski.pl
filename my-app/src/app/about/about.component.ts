import { Component, OnInit } from '@angular/core';
import { QA } from "./qa";
import * as data from './qa.content.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  currentTopic: string = "";
  QA: QA[] = (data as []);

  constructor() { }

  ngOnInit(): void {
  }
}
