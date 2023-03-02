import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeaderComponent } from './register-header.component';

describe('RegisterHeaderComponent', () => {
  let component: RegisterHeaderComponent;
  let fixture: ComponentFixture<RegisterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
