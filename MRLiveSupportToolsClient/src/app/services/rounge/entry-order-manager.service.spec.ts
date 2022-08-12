import { TestBed } from '@angular/core/testing';

import { EntryOrderManagerService } from './entry-order-manager.service';

describe('EntryOrderManagerService', () => {
  let service: EntryOrderManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryOrderManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
