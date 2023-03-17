import { TestBed } from '@angular/core/testing';

import { SuperGuard } from './super.guard';

describe('SuperGuard', () => {
  let guard: SuperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
