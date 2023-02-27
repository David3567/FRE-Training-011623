import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageTwoComponent } from './register-page-two.component';

describe('RegisterPageTwoComponent', () => {
  let component: RegisterPageTwoComponent;
  let fixture: ComponentFixture<RegisterPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
