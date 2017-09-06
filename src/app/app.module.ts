import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftColumnModule } from './left-column/left-column.module'
import { RightColumnModule } from './right-column/right-column.module';
import { FooterComponent } from './footer/footer.component';
import { ThreejsAnimationComponent } from './header/threejs-animation/threejs-animation.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThreejsAnimationComponent
  ],
  imports: [
    BrowserModule,
    RightColumnModule,
    LeftColumnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
