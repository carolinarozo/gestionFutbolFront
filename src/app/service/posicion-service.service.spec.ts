import { TestBed } from '@angular/core/testing';

import { PosicionServiceService } from './posicion-service.service';

describe('PosicionServiceService', () => {
  let service: PosicionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosicionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
