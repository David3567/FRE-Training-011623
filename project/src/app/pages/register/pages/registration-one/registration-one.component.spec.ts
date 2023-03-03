import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOneComponent } from './registration-one.component';

describe('RegistrationOneComponent', () => {
  let component: RegistrationOneComponent;
  let fixture: ComponentFixture<RegistrationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
