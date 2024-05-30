import { TestBed } from '@angular/core/testing';

import { AdoptDonkeyService } from './adopt-donkey.service';

describe('AdoptDonkeyService', () => {
  let service: AdoptDonkeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptDonkeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
