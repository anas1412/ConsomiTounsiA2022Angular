import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSommeComponent } from './add-somme.component';

describe('AddSommeComponent', () => {
  let component: AddSommeComponent;
  let fixture: ComponentFixture<AddSommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
