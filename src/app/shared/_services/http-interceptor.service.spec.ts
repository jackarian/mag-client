import { TestBed } from '@angular/core/testing';

import { AppHttpInterceptorService } from './http-interceptor.service';

describe('HttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHttpInterceptorService = TestBed.get(AppHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
