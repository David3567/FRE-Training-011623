import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSectionComponent } from './tv-section.component';

describe('TvSectionComponent', () => {
  let component: TvSectionComponent;
  let fixture: ComponentFixture<TvSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
