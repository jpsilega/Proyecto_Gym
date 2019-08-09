import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinProductListComponent } from './protein-product-list.component';

describe('ProteinProductListComponent', () => {
  let component: ProteinProductListComponent;
  let fixture: ComponentFixture<ProteinProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
