import { Component, OnInit } from '@angular/core';
import {Produit} from "../Produit/model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../Produit/services/produit.service";
import {IStockService} from "../stock/services/stock.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produitdetail?: Produit;
  produits: Produit[] = [];
  searchText: any;
  popup: boolean=false;
  page:number = 1;

  constructor(
    private dialog: MatDialog,
    private service: IProduitServices

  ) {
  }

  ngOnInit(): void {


    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.produits = data;

    })


  }

}
