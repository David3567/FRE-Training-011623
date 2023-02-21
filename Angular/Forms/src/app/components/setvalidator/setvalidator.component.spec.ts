import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetvalidatorComponent } from './setvalidator.component';

describe('SetvalidatorComponent', () => {
  let component: SetvalidatorComponent;
  let fixture: ComponentFixture<SetvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetvalidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
