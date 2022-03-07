import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionArbitroComponent } from './posicion-arbitro.component';

describe('PosicionArbitroComponent', () => {
  let component: PosicionArbitroComponent;
  let fixture: ComponentFixture<PosicionArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicionArbitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
