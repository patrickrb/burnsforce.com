import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightColumnComponent } from './right-column.component';
import { AsideAboutMeComponent } from './aside-about-me/aside-about-me.component';
import { AsideMySkillsComponent } from './aside-my-skills/aside-my-skills.component';
import { AsideTestimonialsComponent } from './aside-testimonials/aside-testimonials.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RightColumnComponent
  ],
  declarations: [RightColumnComponent, AsideAboutMeComponent, AsideMySkillsComponent, AsideTestimonialsComponent]
})
export class RightColumnModule { }
