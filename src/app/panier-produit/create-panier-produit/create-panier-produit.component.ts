import {Component, Inject, OnInit} from '@angular/core';
import {Paiement} from "../../paiement/model/paiement";
import {PanierProduit} from "../model/panierproduit";
import {IPaiementServices} from "../../paiement/service/paiement.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {IPanierProduitServices} from "../service/panierproduit.service";

@Component({
  selector: 'app-create-panier-produit',
  templateUrl: './create-panier-produit.component.html',
  styleUrls: ['./create-panier-produit.component.css']
})
export class CreatePanierProduitComponent implements OnInit {
  panierproduit: any = new PanierProduit();
  private quantity!: any;

  constructor(
    private service: IPanierProduitServices,
    private dialogRef: MatDialogRef<CreatePanierProduitComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
  }
  add() {
    this.service.addToPanier(this.panierproduit,this.data.id,this.panierproduit?.quantity,1).subscribe(r =>
      this.dialogRef.close())
    alert("Produit a été ajouter au panier!")
  }

}
