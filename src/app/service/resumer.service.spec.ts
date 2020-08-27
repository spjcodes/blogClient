import { TestBed, inject } from '@angular/core/testing';

import { ResumerService } from './resumer.service';

describe('ResumerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumerService]
    });
  });

  it('should be created', inject([ResumerService], (service: ResumerService) => {
    expect(service).toBeTruthy();
  }));
});
