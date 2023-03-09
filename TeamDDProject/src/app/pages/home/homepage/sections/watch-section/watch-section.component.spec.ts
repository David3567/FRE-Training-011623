import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSectionComponent } from './watch-section.component';

describe('WatchSectionComponent', () => {
  let component: WatchSectionComponent;
  let fixture: ComponentFixture<WatchSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
