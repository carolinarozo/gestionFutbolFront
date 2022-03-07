import { TestBed } from '@angular/core/testing';

import { AsociarPosicionJugadorService } from './asociar-posicion-jugador.service';

describe('AsociarPosicionJugadorService', () => {
  let service: AsociarPosicionJugadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsociarPosicionJugadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
