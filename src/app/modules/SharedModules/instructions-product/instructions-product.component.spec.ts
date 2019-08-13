import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsProductComponent } from './instructions-product.component';

describe('InstructionsProductComponent', () => {
  let component: InstructionsProductComponent;
  let fixture: ComponentFixture<InstructionsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
