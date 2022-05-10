import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivraisonDelaiComponent } from './livraison-delai.component';

describe('LivraisonDelaiComponent', () => {
  let component: LivraisonDelaiComponent;
  let fixture: ComponentFixture<LivraisonDelaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivraisonDelaiComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivraisonDelaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
