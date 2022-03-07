import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsEditarJugadorComponent } from './windows-editar-jugador.component';

describe('WindowsEditarJugadorComponent', () => {
  let component: WindowsEditarJugadorComponent;
  let fixture: ComponentFixture<WindowsEditarJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsEditarJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsEditarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
