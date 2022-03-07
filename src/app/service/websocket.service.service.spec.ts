import { TestBed } from '@angular/core/testing';

import { Websocket.ServiceService } from './websocket.service.service';

describe('Websocket.ServiceService', () => {
  let service: Websocket.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Websocket.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
