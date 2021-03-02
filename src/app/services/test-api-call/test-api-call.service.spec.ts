import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TestApiCallService } from './test-api-call.service';

describe('TestApiCallService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule]
    }));

    it('should be created', () => {
        const service: TestApiCallService = TestBed.inject(TestApiCallService);
        expect(service).toBeTruthy();
    });
});
