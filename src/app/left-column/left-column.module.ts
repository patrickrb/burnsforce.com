import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftColumnComponent } from './left-column.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { GithubComponent } from './github/github.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LeftColumnComponent
  ],
  declarations: [
    LeftColumnComponent,
    AboutMeComponent,
    MyProjectsComponent,
    WorkExperienceComponent,
    GithubComponent
  ]
})
export class LeftColumnModule { }
