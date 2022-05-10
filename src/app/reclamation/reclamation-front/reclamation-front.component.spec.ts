import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/cagnotte/cagnotte-list-back/cagnotte-list-back.component.spec.ts
import { CagnotteListBackComponent } from './cagnotte-list-back.component';

describe('CagnotteListBackComponent', () => {
  let component: CagnotteListBackComponent;
  let fixture: ComponentFixture<CagnotteListBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteListBackComponent ]
========
import { ReclamationFrontComponent } from './reclamation-front.component';

describe('ReclamationFrontComponent', () => {
  let component: ReclamationFrontComponent;
  let fixture: ComponentFixture<ReclamationFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationFrontComponent ]
>>>>>>>> origin/livraisonBranch:src/app/reclamation/reclamation-front/reclamation-front.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/cagnotte/cagnotte-list-back/cagnotte-list-back.component.spec.ts
    fixture = TestBed.createComponent(CagnotteListBackComponent);
========
    fixture = TestBed.createComponent(ReclamationFrontComponent);
>>>>>>>> origin/livraisonBranch:src/app/reclamation/reclamation-front/reclamation-front.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
