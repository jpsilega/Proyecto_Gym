import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplmentosParentListComponent } from './suplmentos-parent-list.component';

describe('SuplmentosParentListComponent', () => {
  let component: SuplmentosParentListComponent;
  let fixture: ComponentFixture<SuplmentosParentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplmentosParentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplmentosParentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
