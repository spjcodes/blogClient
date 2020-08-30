import { TestBed, inject } from '@angular/core/testing';

import { EditselfintroService } from './editselfintro.service';

describe('EditselfintroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditselfintroService]
    });
  });

  it('should be created', inject([EditselfintroService], (service: EditselfintroService) => {
    expect(service).toBeTruthy();
  }));
});
