import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Facture} from "../model/facture";
import {IFactureServices} from "../service/facture.service";
import {IPaiementServices} from "../../paiement/service/paiement.service";

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {

  facture: Facture = new Facture();
  paiements: any;
  idPaiement: any;
  idUser: any;

  constructor(
    private service: IFactureServices,
    private servicepaiement: IPaiementServices,
    private dialogRef: MatDialogRef<CreateFactureComponent>
  ) { }

  ngOnInit(): void {

  this.servicepaiement.findAll().subscribe((data)=>{this.paiements = data})

  }

  add() {
    this.service.save(this.facture,this.idPaiement).subscribe(data => this.dialogRef.close())

  }

}
