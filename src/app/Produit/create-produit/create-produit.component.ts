import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {IProduitServices} from "../services/produit.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  produit: Produit = new Produit();
  constructor(
    private service: IProduitServices,
    private dialogRef: MatDialogRef<CreateProduitComponent>
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.produit,1,1).subscribe(data => this.dialogRef.close())
  }
}
