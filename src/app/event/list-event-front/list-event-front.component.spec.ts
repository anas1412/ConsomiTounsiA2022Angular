import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventFrontComponent } from './list-event-front.component';

describe('ListEventFrontComponent', () => {
  let component: ListEventFrontComponent;
  let fixture: ComponentFixture<ListEventFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEventFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
