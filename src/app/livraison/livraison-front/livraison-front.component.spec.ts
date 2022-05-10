import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivraisonFrontComponent } from './livraison-front.component';

describe('LivraisonFrontComponent', () => {
  let component: LivraisonFrontComponent;
  let fixture: ComponentFixture<LivraisonFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
