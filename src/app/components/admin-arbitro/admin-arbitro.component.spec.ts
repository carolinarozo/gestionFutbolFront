import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArbitroComponent } from './admin-arbitro.component';

describe('AdminArbitroComponent', () => {
  let component: AdminArbitroComponent;
  let fixture: ComponentFixture<AdminArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArbitroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
