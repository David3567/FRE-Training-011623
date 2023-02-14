import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailQualityComponent } from './box-detail-quality.component';

describe('BoxDetailQualityComponent', () => {
  let component: BoxDetailQualityComponent;
  let fixture: ComponentFixture<BoxDetailQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
