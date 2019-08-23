import { TestBed } from '@angular/core/testing';

import { JyoserviceService } from './jyoservice.service';

describe('JyoserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JyoserviceService = TestBed.get(JyoserviceService);
    expect(service).toBeTruthy();
  });
});
