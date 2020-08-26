import { TestBed, inject } from '@angular/core/testing';

import { ArticletypeService } from './articletype.service';

describe('ArticletypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticletypeService]
    });
  });

  it('should be created', inject([ArticletypeService], (service: ArticletypeService) => {
    expect(service).toBeTruthy();
  }));
});
