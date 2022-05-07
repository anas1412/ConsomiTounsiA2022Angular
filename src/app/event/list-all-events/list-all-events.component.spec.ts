import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEventsComponent } from './list-all-events.component';

describe('ListAllEventsComponent', () => {
  let component: ListAllEventsComponent;
  let fixture: ComponentFixture<ListAllEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
