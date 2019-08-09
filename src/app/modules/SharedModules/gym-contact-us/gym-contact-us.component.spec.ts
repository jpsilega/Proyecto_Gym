import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymContactUsComponent } from './gym-contact-us.component';

describe('GymContactUsComponent', () => {
  let component: GymContactUsComponent;
  let fixture: ComponentFixture<GymContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
