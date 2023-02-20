import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage3Component } from './register-page3.component';

describe('RegisterPage3Component', () => {
  let component: RegisterPage3Component;
  let fixture: ComponentFixture<RegisterPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
