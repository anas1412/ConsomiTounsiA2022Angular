import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitFrontComponent } from './list-produit-front.component';

describe('ListProduitFrontComponent', () => {
  let component: ListProduitFrontComponent;
  let fixture: ComponentFixture<ListProduitFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
