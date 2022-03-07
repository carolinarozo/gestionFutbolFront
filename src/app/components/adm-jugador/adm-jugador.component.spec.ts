import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmJugadorComponent } from './adm-jugador.component';

describe('AdmJugadorComponent', () => {
  let component: AdmJugadorComponent;
  let fixture: ComponentFixture<AdmJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
