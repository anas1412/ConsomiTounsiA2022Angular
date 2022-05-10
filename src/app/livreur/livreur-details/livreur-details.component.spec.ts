import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurDetailsComponent } from './livreur-details.component';

describe('LivreurDetailsComponent', () => {
  let component: LivreurDetailsComponent;
  let fixture: ComponentFixture<LivreurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
