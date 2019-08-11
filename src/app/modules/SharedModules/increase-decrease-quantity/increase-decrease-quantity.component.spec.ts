import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseDecreaseQuantityComponent } from './increase-decrease-quantity.component';

describe('IncreaseDecreaseQuantityComponent', () => {
  let component: IncreaseDecreaseQuantityComponent;
  let fixture: ComponentFixture<IncreaseDecreaseQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreaseDecreaseQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseDecreaseQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
