import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideTestimonialsComponent } from './aside-testimonials.component';

describe('AsideTestimonialsComponent', () => {
  let component: AsideTestimonialsComponent;
  let fixture: ComponentFixture<AsideTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
