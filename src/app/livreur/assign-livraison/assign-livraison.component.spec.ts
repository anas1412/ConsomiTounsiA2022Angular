import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLivraisonComponent } from './assign-livraison.component';

describe('AssignLivraisonComponent', () => {
  let component: AssignLivraisonComponent;
  let fixture: ComponentFixture<AssignLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignLivraisonComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
