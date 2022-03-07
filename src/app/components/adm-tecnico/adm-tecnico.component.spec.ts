import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTecnicoComponent } from './adm-tecnico.component';

describe('AdmTecnicoComponent', () => {
  let component: AdmTecnicoComponent;
  let fixture: ComponentFixture<AdmTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
