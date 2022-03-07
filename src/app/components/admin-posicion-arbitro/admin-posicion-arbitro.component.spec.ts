import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPosicionArbitroComponent } from './admin-posicion-arbitro.component';

describe('AdminPosicionArbitroComponent', () => {
  let component: AdminPosicionArbitroComponent;
  let fixture: ComponentFixture<AdminPosicionArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPosicionArbitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPosicionArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
