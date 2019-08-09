import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGymComponent } from './logo-gym.component';

describe('LogoGymComponent', () => {
  let component: LogoGymComponent;
  let fixture: ComponentFixture<LogoGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
