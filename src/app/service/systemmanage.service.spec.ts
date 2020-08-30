import { TestBed, inject } from '@angular/core/testing';

import { SystemmanageService } from './systemmanage.service';

describe('SystemmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemmanageService]
    });
  });

  it('should be created', inject([SystemmanageService], (service: SystemmanageService) => {
    expect(service).toBeTruthy();
  }));
});
