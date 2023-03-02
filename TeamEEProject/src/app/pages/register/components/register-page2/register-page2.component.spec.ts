import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage2Component } from './register-page2.component';

describe('RegisterPage2Component', () => {
  let component: RegisterPage2Component;
  let fixture: ComponentFixture<RegisterPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
