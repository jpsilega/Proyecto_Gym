import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymOpenHourComponent } from './gym-open-hour.component';

describe('GymOpenHourComponent', () => {
  let component: GymOpenHourComponent;
  let fixture: ComponentFixture<GymOpenHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymOpenHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymOpenHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
