import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersNumbersComponent } from './numbers-numbers.component';

describe('NumbersNumbersComponent', () => {
  let component: NumbersNumbersComponent;
  let fixture: ComponentFixture<NumbersNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
