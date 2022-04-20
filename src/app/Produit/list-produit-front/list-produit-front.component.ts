import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";

@Component({
  selector: 'app-list-produit-front',
  templateUrl: './list-produit-front.component.html',
  styleUrls: ['./list-produit-front.component.css']
})
export class ListProduitFrontComponent implements OnInit {

  produits: Produit[] = [];

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
