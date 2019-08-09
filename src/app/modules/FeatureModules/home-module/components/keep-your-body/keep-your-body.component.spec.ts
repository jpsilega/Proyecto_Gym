import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepYourBodyComponent } from './keep-your-body.component';

describe('KeepYourBodyComponent', () => {
  let component: KeepYourBodyComponent;
  let fixture: ComponentFixture<KeepYourBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepYourBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepYourBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
