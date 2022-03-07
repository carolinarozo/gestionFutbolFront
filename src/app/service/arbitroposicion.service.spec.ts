import { TestBed } from '@angular/core/testing';

import { ArbitroposicionService } from './arbitroposicion.service';

describe('ArbitroposicionService', () => {
  let service: ArbitroposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArbitroposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
