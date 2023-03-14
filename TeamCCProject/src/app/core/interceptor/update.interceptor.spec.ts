import { TestBed } from '@angular/core/testing';

import { UpdateInterceptor } from './update.interceptor';

describe('UpdateInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UpdateInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UpdateInterceptor = TestBed.inject(UpdateInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
