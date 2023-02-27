import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanBoxComponent } from './plan-box.component';

describe('PlanBoxComponent', () => {
  let component: PlanBoxComponent;
  let fixture: ComponentFixture<PlanBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
