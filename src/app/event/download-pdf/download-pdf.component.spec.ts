import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPDFComponent } from './download-pdf.component';

describe('DownloadPDFComponent', () => {
  let component: DownloadPDFComponent;
  let fixture: ComponentFixture<DownloadPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
