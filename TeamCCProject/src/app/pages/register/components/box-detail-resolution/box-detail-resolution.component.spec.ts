import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailResolutionComponent } from './box-detail-resolution.component';

describe('BoxDetailResolutionComponent', () => {
  let component: BoxDetailResolutionComponent;
  let fixture: ComponentFixture<BoxDetailResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailResolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
