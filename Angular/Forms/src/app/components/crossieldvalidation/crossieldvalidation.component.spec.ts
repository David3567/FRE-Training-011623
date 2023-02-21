import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossieldvalidationComponent } from './crossieldvalidation.component';

describe('CrossieldvalidationComponent', () => {
  let component: CrossieldvalidationComponent;
  let fixture: ComponentFixture<CrossieldvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossieldvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossieldvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
