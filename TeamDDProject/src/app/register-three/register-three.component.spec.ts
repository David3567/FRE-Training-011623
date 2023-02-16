import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThreeComponent } from './register-three.component';

describe('RegisterThreeComponent', () => {
  let component: RegisterThreeComponent;
  let fixture: ComponentFixture<RegisterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
