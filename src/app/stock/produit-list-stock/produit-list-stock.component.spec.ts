import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitListStockComponent } from './produit-list-stock.component';

describe('ProduitListStockComponent', () => {
  let component: ProduitListStockComponent;
  let fixture: ComponentFixture<ProduitListStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitListStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitListStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
