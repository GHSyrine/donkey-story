import { TestBed } from '@angular/core/testing';

import { CollectionDokeyService } from './collection-dokey.service';

describe('CollectionDokeyService', () => {
  let service: CollectionDokeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionDokeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
