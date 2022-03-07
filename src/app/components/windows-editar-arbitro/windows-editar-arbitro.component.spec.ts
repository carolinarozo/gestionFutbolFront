import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsEditarArbitroComponent } from './windows-editar-arbitro.component';

describe('WindowsEditarArbitroComponent', () => {
  let component: WindowsEditarArbitroComponent;
  let fixture: ComponentFixture<WindowsEditarArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsEditarArbitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsEditarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
