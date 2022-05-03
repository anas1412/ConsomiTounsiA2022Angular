import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Paiement} from "../model/paiement";
import {IPaiementServices} from "../service/paiement.service";
import {ListPanierProduitComponent} from "../../panier-produit/list-panier-produit/list-panier-produit.component";
import {Facture} from "../../facture/model/facture";
import {IFactureServices} from "../../facture/service/facture.service";

@Component({
  selector: 'app-create-paiement',
  templateUrl: './create-paiement.component.html',
  styleUrls: ['./create-paiement.component.css']
})
export class CreatePaiementComponent implements OnInit {
  paiement: Paiement = new Paiement();
  facture: Facture = new Facture();
  constructor(
    private service: IPaiementServices,
    private fservice: IFactureServices,
    private dialogRef: MatDialogRef<CreatePaiementComponent>
  ) {}

  ngOnInit(): void {
  }

  add() {

    this.service.save(this.paiement,1).subscribe(data =>
      console.log(data))
      //this.dialogRef.close())

      this.addFacture();
    alert('Paiement réussi, veuillez consulter votre list des factures')
  }


  addFacture(){
    this.facture.paiement = this.paiement;
    this.facture.user = this.paiement.user;
    this.fservice.save(this.paiement,1).subscribe(data =>this.dialogRef.close()
    )
  }


}
