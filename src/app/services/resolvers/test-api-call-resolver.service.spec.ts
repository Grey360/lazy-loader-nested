import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TestApiCallResolverService } from './test-api-call-resolver.service';

describe('TestApiCallResolverService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HttpClient,
            HttpHandler
        ]
    }));

    it('should be created', () => {
        const service: TestApiCallResolverService = TestBed.inject(TestApiCallResolverService);
        expect(service).toBeTruthy();
    });
});
