import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePanierProduitComponent } from './update-panier-produit.component';

describe('UpdatePanierProduitComponent', () => {
  let component: UpdatePanierProduitComponent;
  let fixture: ComponentFixture<UpdatePanierProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePanierProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePanierProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
