import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Facture} from "../model/facture";
import {IFactureServices} from "../service/facture.service";

@Component({
  selector: 'app-list-facture-back',
  templateUrl: './list-facture-back.component.html',
  styleUrls: ['./list-facture-back.component.css']
})
export class ListFactureBackComponent implements OnInit {

  factures: Facture[] = [];

  constructor(
    private dialog: MatDialog,
    private service: IFactureServices) {
  }

  ngOnInit(): void {


    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.factures = data;
    })
  }



}
