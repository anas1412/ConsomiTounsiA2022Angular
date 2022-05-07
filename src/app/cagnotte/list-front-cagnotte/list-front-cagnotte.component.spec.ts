import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrontCagnotteComponent } from './list-front-cagnotte.component';

describe('ListFrontCagnotteComponent', () => {
  let component: ListFrontCagnotteComponent;
  let fixture: ComponentFixture<ListFrontCagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFrontCagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFrontCagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
