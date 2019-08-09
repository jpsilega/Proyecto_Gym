import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymNumberDashboardComponent } from './gym-number-dashboard.component';

describe('GymNumberDashboardComponent', () => {
  let component: GymNumberDashboardComponent;
  let fixture: ComponentFixture<GymNumberDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymNumberDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymNumberDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
