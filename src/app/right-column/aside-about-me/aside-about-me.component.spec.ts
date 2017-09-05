import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAboutMeComponent } from './aside-about-me.component';

describe('AsideAboutMeComponent', () => {
  let component: AsideAboutMeComponent;
  let fixture: ComponentFixture<AsideAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
