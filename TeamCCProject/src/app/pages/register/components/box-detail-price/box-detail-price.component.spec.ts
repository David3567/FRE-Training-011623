import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailPriceComponent } from './box-detail-price.component';

describe('BoxDetailPriceComponent', () => {
  let component: BoxDetailPriceComponent;
  let fixture: ComponentFixture<BoxDetailPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
