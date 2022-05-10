import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLivraisonComponent } from './form-livraison.component';

describe('FormLivraisonComponent', () => {
  let component: FormLivraisonComponent;
  let fixture: ComponentFixture<FormLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLivraisonComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(FormLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
