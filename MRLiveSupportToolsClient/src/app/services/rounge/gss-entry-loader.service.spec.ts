import { GSSEntryLoaderService } from './gss-entry-loader.service';
import { TestBed } from '@angular/core/testing';

describe('GSSEntryLoaderService', () => {
  let service: GSSEntryLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GSSEntryLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
