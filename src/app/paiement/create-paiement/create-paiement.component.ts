import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Paiement} from "../model/paiement";
import {IPaiementServices} from "../service/paiement.service";
import {ListPanierProduitComponent} from "../../panier-produit/list-panier-produit/list-panier-produit.component";
import {Facture} from "../../facture/model/facture";
import {IFactureServices} from "../../facture/service/facture.service";
import {ListFactureBackComponent} from "../../facture/list-facture-back/list-facture-back.component";
import {IPanierProduitServices} from "../../panier-produit/service/panierproduit.service";
import {CreateFactureComponent} from "../../facture/create-facture/create-facture.component";

@Component({
  selector: 'app-create-paiement',
  templateUrl: './create-paiement.component.html',
  styleUrls: ['./create-paiement.component.css']
})
export class CreatePaiementComponent implements OnInit {
  paiement: Paiement = new Paiement();
  private p?: Paiement;
  price: any = this.data.p;

  constructor(
    private service: IPaiementServices,
    private dialogRef: MatDialogRef<CreatePaiementComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) {}

  ngOnInit(): void {
  }

  add() {

    this.service.save(this.paiement,1).subscribe(r =>
      //this.p = r,
      this.openShowDialog3(r)
      //this.dialogRef.close()
    )

    //alert('Paiement réussi, veuillez consulter votre list des factures')
    //)
  }

  openShowDialog3(r: any) {
    const dialogRef = this.dialog.open(CreateFactureComponent, {
      width: '400px',
      data: {
        id: r.idPaiement
      }

    });
  }




}
