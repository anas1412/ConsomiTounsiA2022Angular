import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../model/event';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { ViewChild, ElementRef } from '@angular/core';
import { CagnotteService } from 'src/app/cagnotte/services/cagnotteservice';
import { Cagnotte } from 'src/app/cagnotte/model/cagnotte';

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.css']
})
export class DownloadPDFComponent implements OnInit {
  eventD: Event[] = [];
  cagnottetD: Cagnotte[] = [];
  constructor(
    private service: EventService,
    private serviceC : CagnotteService
  ) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.eventD= data;

      
    }),
    this.serviceC.findAll().subscribe(data => {
      // @ts-ignore
      this.cagnottetD= data;
    })
  }

  captureScreen() {
    let data = document.getElementById('contentToConvert');
    html2canvas(data as any).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save(`MyPdf.pdf`);
    });
}


}
