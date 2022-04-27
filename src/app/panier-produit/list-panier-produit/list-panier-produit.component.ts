import { Component, OnInit } from '@angular/core';
import {IFactureServices} from "../../facture/service/facture.service";
import {IPanierProduitServices} from "../service/panierproduit.service";
import {IProduitServices} from "../../Produit/services/produit.service";
import {Produit} from "../../Produit/model/produit";
import {PanierProduit} from "../model/panierproduit";


@Component({
  selector: 'app-list-panier-produit',
  templateUrl: './list-panier-produit.component.html',
  styleUrls: ['./list-panier-produit.component.css']
})
export class ListPanierProduitComponent implements OnInit {
  panierProduits: PanierProduit[] = [];

  constructor(
    private service: IPanierProduitServices
  ) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.panierProduits = data;
    })
  }

  supprimer(id: any) {
    if(confirm('voulez vous vraiment supprimer ?')){
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }

}
