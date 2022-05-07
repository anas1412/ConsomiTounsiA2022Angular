import { Component, OnInit } from '@angular/core';
import {Paiement} from "../../paiement/model/paiement";
import {PanierProduit} from "../model/panierproduit";
import {IPaiementServices} from "../../paiement/service/paiement.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {IPanierProduitServices} from "../service/panierproduit.service";

@Component({
  selector: 'app-create-panier-produit',
  templateUrl: './create-panier-produit.component.html',
  styleUrls: ['./create-panier-produit.component.css']
})
export class CreatePanierProduitComponent implements OnInit {
  panierproduit: PanierProduit = new PanierProduit();
  private quantity!: Number;
  private produitId!: Number;

  constructor(
    private service: IPanierProduitServices,
    private dialogRef: MatDialogRef<CreatePanierProduitComponent>,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.addToPanier(this.panierproduit,this.produitId,this.quantity,1).subscribe(r =>
      this.dialogRef.close())
    alert("Produit a été ajouter au panier!")
  }

}
