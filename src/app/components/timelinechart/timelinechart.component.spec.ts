import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinechartComponent } from './timelinechart.component';

describe('TimelinechartComponent', () => {
  let component: TimelinechartComponent;
  let fixture: ComponentFixture<TimelinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
