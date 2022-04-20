import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitBackComponent } from './list-produit-back.component';

describe('ListProduitBackComponent', () => {
  let component: ListProduitBackComponent;
  let fixture: ComponentFixture<ListProduitBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProduitBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
