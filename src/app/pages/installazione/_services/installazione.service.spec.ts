import { TestBed } from '@angular/core/testing';

import { InstallazioneService } from './installazione.service';

describe('InstallazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallazioneService = TestBed.get(InstallazioneService);
    expect(service).toBeTruthy();
  });
});
