import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPosicionComponent } from './adm-posicion.component';

describe('AdmPosicionComponent', () => {
  let component: AdmPosicionComponent;
  let fixture: ComponentFixture<AdmPosicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmPosicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPosicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
