import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageThreeComponent } from './register-page-three.component';

describe('RegisterPageThreeComponent', () => {
  let component: RegisterPageThreeComponent;
  let fixture: ComponentFixture<RegisterPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
