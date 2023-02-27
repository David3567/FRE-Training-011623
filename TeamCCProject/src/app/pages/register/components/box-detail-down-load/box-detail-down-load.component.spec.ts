import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDetailDownLoadComponent } from './box-detail-down-load.component';

describe('BoxDetailDownLoadComponent', () => {
  let component: BoxDetailDownLoadComponent;
  let fixture: ComponentFixture<BoxDetailDownLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxDetailDownLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxDetailDownLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
