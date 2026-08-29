import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FootbarPage } from './footbar.page';

describe('FootbarPage', () => {
  let component: FootbarPage;
  let fixture: ComponentFixture<FootbarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
