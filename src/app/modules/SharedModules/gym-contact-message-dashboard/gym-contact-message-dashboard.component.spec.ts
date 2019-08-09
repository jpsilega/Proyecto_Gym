import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymContactMessageDashboardComponent } from './gym-contact-message-dashboard.component';

describe('GymContactMessageDashboardComponent', () => {
  let component: GymContactMessageDashboardComponent;
  let fixture: ComponentFixture<GymContactMessageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymContactMessageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymContactMessageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
