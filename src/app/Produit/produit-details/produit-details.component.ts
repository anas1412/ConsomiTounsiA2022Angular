import {Component, Input, OnInit} from '@angular/core';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css']
})
export class ProduitDetailsComponent implements OnInit {
  @Input()
  produit?: any ;
  searchText: any;


  constructor(

  )

  {
  }


  ngOnInit(): void {

    console.log(this.produit)


  }


}
