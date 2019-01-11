import { TestBed } from '@angular/core/testing';

import { TestApiCallResolverService } from './test-api-call-resolver.service';

describe('TestApiCallResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestApiCallResolverService = TestBed.get(TestApiCallResolverService);
    expect(service).toBeTruthy();
  });
});
