import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {IProduitServices} from "../services/produit.service";
import {MatDialogRef} from "@angular/material/dialog";
import {IStockService} from "../../stock/services/stock.service";

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  produit: Produit = new Produit();
  stocks: any;
  idStock: any;
  idUser: any;



  constructor(
    private service: IProduitServices,
    private servicestock: IStockService,
    private dialogRef: MatDialogRef<CreateProduitComponent>
  ) { }

  ngOnInit(): void {
    this.servicestock.findAll().subscribe((data)=>{this.stocks = data})
  }

  add() {
    this.service.save(this.produit,this.idStock,1).subscribe(data => this.dialogRef.close())

    }
  }



