import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiringLivreurComponent } from './hiring-livreur.component';

describe('HiringLivreurComponent', () => {
  let component: HiringLivreurComponent;
  let fixture: ComponentFixture<HiringLivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HiringLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
