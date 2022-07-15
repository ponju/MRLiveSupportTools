import { TestBed } from '@angular/core/testing';

import { RoungeInfoService } from './rounge-info-service.service';

describe('RoungeInfoServiceService', () => {
  let service: RoungeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoungeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
