import { TestBed } from '@angular/core/testing';

import { BloodBankAPIService } from './blood-bank-api.service';

describe('BloodBankAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodBankAPIService = TestBed.get(BloodBankAPIService);
    expect(service).toBeTruthy();
  });
});
