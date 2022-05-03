import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Facture} from "../model/facture";
import {IFactureServices} from "../service/facture.service";
//import {pdf} from "../../../environments/environment";


@Component({
  selector: 'app-list-facture-back',
  templateUrl: './list-facture-back.component.html',
  styleUrls: ['./list-facture-back.component.css']
})
export class ListFactureBackComponent implements OnInit {

  factures: Facture[] = [];
  //pdfLink: any;

  constructor(
    private dialog: MatDialog,
    private service: IFactureServices) {
  }

  ngOnInit(): void {

    //this.pdfLink = pdf;


    this.service.findByUser(1).subscribe(data => {
      // @ts-ignore
      this.factures = data;
    })
  }



}
