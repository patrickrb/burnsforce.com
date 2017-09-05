import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-aside-my-skills',
  templateUrl: './aside-my-skills.component.html',
  styleUrls: ['./aside-my-skills.component.less']
})
export class AsideMySkillsComponent implements OnInit {
  mySkills = [
    {
      name: "Angular2+",
      level: "Expert",
      percent: "95%"
    },
    {
      name: "Node.js",
      level: "Expert",
      percent: "90%"
    },
    {
      name: "MongoDB",
      level: "Pro",
      percent: "85%"
    },
    {
      name: "Docker",
      level: "Expert",
      percent: "90%"
    },
    {
      name: "PHP",
      level: "Expert",
      percent: "90%"
    },
    {
      name: "Linux",
      level: "Expert",
      percent: "95%"
    }
  ]
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    jQuery('.level-bar-inner').each(function() {
      console.log('found bar')
        var itemWidth = jQuery(this).data('level');
        jQuery(this).animate({
            width: itemWidth
        }, 800);
    });
  }

}
