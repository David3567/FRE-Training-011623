import { TestBed } from '@angular/core/testing';

import { ProductListResolverService } from './product-list-resolver.service';

describe('ProductListResolverService', () => {
  let service: ProductListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
