import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMovieListComponent } from './popular-movie-list.component';

describe('PopularMovieListComponent', () => {
  let component: PopularMovieListComponent;
  let fixture: ComponentFixture<PopularMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
