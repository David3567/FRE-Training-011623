import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieComponent } from './popular-movie.component';

describe('PopularMovieListComponent', () => {
  let component: PopularMovieComponent;
  let fixture: ComponentFixture<PopularMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
