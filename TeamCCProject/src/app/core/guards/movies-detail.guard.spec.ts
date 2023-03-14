import { TestBed } from '@angular/core/testing';

import { MoviesDetailGuard } from './movies-detail.guard';

describe('MoviesDetailGuard', () => {
  let guard: MoviesDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoviesDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
