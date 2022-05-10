import { Component, OnInit } from '@angular/core';
import {Produit} from "../Produit/model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../Produit/services/produit.service";
import {IStockService} from "../stock/services/stock.service";
import {Livraison} from "../livraison/model/livraison";
import {ILivraisonService} from "../livraison/services/livraison.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
livraison : Livraison;


  produitdetail?: Produit;
  produits: Produit[] = [];
  searchText: any;
  popup: boolean=false;
  page:number = 1;
  adresse:string;
  constructor(
    private dialog: MatDialog,
    private service: IProduitServices,
    private livraisonService: ILivraisonService,
    private router: Router
  ) {
  }

  ngOnInit(): void {


    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.produits = data;
    })

}

}
