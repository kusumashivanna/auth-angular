import { TestBed } from '@angular/core/testing';

import { ChildAuthGuardGuard } from './child-auth-guard.guard';

describe('ChildAuthGuardGuard', () => {
  let guard: ChildAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
