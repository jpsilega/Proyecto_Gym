import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatinaProductListComponent } from './creatina-product-list.component';

describe('CreatinaProductListComponent', () => {
  let component: CreatinaProductListComponent;
  let fixture: ComponentFixture<CreatinaProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatinaProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatinaProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
