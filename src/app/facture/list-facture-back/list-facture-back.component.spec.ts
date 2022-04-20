import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFactureBackComponent } from './list-facture-back.component';

describe('ListFactureBackComponent', () => {
  let component: ListFactureBackComponent;
  let fixture: ComponentFixture<ListFactureBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFactureBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFactureBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
