import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTwoComponent } from './register-two.component';

describe('RegisterTwoComponent', () => {
  let component: RegisterTwoComponent;
  let fixture: ComponentFixture<RegisterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
