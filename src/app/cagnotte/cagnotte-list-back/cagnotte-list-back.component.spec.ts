import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CagnotteListBackComponent } from './cagnotte-list-back.component';

describe('CagnotteListBackComponent', () => {
  let component: CagnotteListBackComponent;
  let fixture: ComponentFixture<CagnotteListBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteListBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnotteListBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
