import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftColumnComponent } from './left-column.component';

describe('LeftColumnComponent', () => {
  let component: LeftColumnComponent;
  let fixture: ComponentFixture<LeftColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});