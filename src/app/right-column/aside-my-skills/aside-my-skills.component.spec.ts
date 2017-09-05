import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMySkillsComponent } from './aside-my-skills.component';

describe('AsideMySkillsComponent', () => {
  let component: AsideMySkillsComponent;
  let fixture: ComponentFixture<AsideMySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideMySkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideMySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
