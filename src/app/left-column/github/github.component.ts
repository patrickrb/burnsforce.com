import { Component, OnInit } from '@angular/core';
import * as githubCalendar from 'github-calendar';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.less']
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    githubCalendar("#github-graph", "patrickrb");
  }

}
