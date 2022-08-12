import { TestBed } from '@angular/core/testing';

import { RoungeHistoryHolderService } from './rounge-history-holder.service';

describe('RoungeHistoryHolderService', () => {
  let service: RoungeHistoryHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoungeHistoryHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
