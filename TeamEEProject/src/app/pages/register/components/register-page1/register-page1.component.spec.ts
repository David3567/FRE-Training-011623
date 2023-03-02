import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPage1Component } from './register-page1.component';

describe('RegisterPage1Component', () => {
  let component: RegisterPage1Component;
  let fixture: ComponentFixture<RegisterPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
