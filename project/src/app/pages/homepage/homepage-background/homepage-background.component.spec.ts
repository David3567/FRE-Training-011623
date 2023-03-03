import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBackgroundComponent } from './homepage-background.component';

describe('HomepageBackgroundComponent', () => {
  let component: HomepageBackgroundComponent;
  let fixture: ComponentFixture<HomepageBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
