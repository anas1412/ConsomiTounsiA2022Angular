import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";
import {ProduitDetailsComponent} from "../produit-details/produit-details.component";
import {UpdateProduitComponent} from "../update-produit/update-produit.component";
import {IStockService} from "../../stock/services/stock.service";

@Component({
  selector: 'app-list-produit-front',
  templateUrl: './list-produit-front.component.html',
  styleUrls: ['./list-produit-front.component.css']
})
export class ListProduitFrontComponent implements OnInit {

  produitdetail?: Produit;
  produits: Produit[] = [];
  stocks: any;
  idStock: any;
  searchText: any;
  popup: boolean=false;


  constructor(
    private dialog: MatDialog,
    private service: IProduitServices,
    private servicestock: IStockService,
  ) {
  }

  ngOnInit(): void {


    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.produits = data;
    })

    this.servicestock.findAll().subscribe((data)=>{this.stocks = data})
  }


  Onpopup(produit: Produit){
    this.produitdetail = produit;
    this.popup = true;
  }


}
