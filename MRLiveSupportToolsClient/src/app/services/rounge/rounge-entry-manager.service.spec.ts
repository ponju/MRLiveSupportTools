import { TestBed } from '@angular/core/testing';

import { RoungeEntryManagerService } from './rounge-entry-manager.service';

describe('RoungeEntryManagerService', () => {
  let service: RoungeEntryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoungeEntryManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
