import { TestBed } from '@angular/core/testing';

import { InstitucaoApiService } from './institucao-api.service';

describe('InstitucaoApiService', () => {
  let service: InstitucaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitucaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
