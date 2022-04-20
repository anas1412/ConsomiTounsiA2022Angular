import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockBackComponent } from './list-stock-back.component';

describe('ListStockBackComponent', () => {
  let component: ListStockBackComponent;
  let fixture: ComponentFixture<ListStockBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStockBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStockBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
