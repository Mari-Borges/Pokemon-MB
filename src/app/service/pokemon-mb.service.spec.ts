import { TestBed } from '@angular/core/testing';

import { PokemonMBService } from './pokemon-mb.service';

describe('PokemonMBService', () => {
  let service: PokemonMBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonMBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
