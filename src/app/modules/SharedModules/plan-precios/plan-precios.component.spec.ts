import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPreciosComponent } from './plan-precios.component';

describe('PlanPreciosComponent', () => {
  let component: PlanPreciosComponent;
  let fixture: ComponentFixture<PlanPreciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPreciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPreciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
