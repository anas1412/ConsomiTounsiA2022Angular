import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulercommandeComponent } from './annulercommande.component';

describe('AnnulercommandeComponent', () => {
  let component: AnnulercommandeComponent;
  let fixture: ComponentFixture<AnnulercommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnulercommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulercommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
