import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatinaProductComponent } from './creatina-product.component';

describe('CreatinaProductComponent', () => {
  let component: CreatinaProductComponent;
  let fixture: ComponentFixture<CreatinaProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatinaProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatinaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
