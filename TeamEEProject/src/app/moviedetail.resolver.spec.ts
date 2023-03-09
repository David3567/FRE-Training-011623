import { TestBed } from '@angular/core/testing';

import { MoviedetailResolver } from './moviedetail.resolver';

describe('MoviedetailResolver', () => {
  let resolver: MoviedetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MoviedetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
