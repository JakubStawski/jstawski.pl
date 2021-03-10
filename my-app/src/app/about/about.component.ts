import { QueryValueType } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { QA } from "./qa";
import * as data from './qa.content.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  QA: QA[] = (data as any).default;
  filter : string = 'all';
  itemTags = this.QA;

  activeFilterDisplay(check: string) {
      this.filter = check;
      this.getQuestions(check);
  }

  constructor() { }

  ngOnInit(): void {
  }

  getQuestions(check: string) {
    let itemTags = [];
    if (check != 'all') {
      itemTags.push(this.QA.filter(i => i.tags.includes(check)));
      this.itemTags = itemTags[0];
    } else {
      itemTags = this.QA
      this.itemTags = itemTags;
    }
  }
}
