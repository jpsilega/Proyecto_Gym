import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatinaProductDetailComponent } from './creatina-product-detail.component';

describe('CreatinaProductDetailComponent', () => {
  let component: CreatinaProductDetailComponent;
  let fixture: ComponentFixture<CreatinaProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatinaProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatinaProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
