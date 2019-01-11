import { TestBed } from '@angular/core/testing';

import { TestApiCallService } from './test-api-call.service';

describe('TestApiCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestApiCallService = TestBed.get(TestApiCallService);
    expect(service).toBeTruthy();
  });
});
