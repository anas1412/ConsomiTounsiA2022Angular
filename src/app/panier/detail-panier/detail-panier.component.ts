import { Component, OnInit } from '@angular/core';
import {ListPanierProduitComponent} from "../../panier-produit/list-panier-produit/list-panier-produit.component";
import {ListFactureBackComponent} from "../../facture/list-facture-back/list-facture-back.component";
import {IPanierServices} from "../service/panier.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-panier',
  templateUrl: './detail-panier.component.html',
  styleUrls: ['./detail-panier.component.css']
})
export class DetailPanierComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private service: IPanierServices,
  ) { }

  ngOnInit(): void {


  }

  openShowDialog() {
    const dialogRef = this.dialog.open(ListFactureBackComponent, {
      width: '800px'
    });

  }

}
