import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPlanComponent } from './registration-plan.component';

describe('RegistrationPlanComponent', () => {
  let component: RegistrationPlanComponent;
  let fixture: ComponentFixture<RegistrationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
