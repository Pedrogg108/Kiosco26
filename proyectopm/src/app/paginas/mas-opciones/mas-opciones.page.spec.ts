import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasOpcionesPage } from './mas-opciones.page';

describe('MasOpcionesPage', () => {
  let component: MasOpcionesPage;
  let fixture: ComponentFixture<MasOpcionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MasOpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
