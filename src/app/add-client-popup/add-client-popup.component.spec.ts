import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPopupComponent } from './add-client-popup.component';

describe('AddClientPopupComponent', () => {
  let component: AddClientPopupComponent;
  let fixture: ComponentFixture<AddClientPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClientPopupComponent]
    });
    fixture = TestBed.createComponent(AddClientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
