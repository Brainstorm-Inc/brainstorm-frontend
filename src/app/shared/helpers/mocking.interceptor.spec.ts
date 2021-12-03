import { TestBed } from '@angular/core/testing';

import { MockingInterceptor } from './mocking.interceptor';

describe('MockingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MockingInterceptor = TestBed.inject(MockingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
