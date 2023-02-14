import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieitemPageComponent } from './movieitem-page.component';

describe('MovieitemPageComponent', () => {
  let component: MovieitemPageComponent;
  let fixture: ComponentFixture<MovieitemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieitemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieitemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
