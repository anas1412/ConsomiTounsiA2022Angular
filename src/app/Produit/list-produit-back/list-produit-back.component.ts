import { Component, OnInit } from '@angular/core';
import {Produit} from "../model/produit";
import {MatDialog} from "@angular/material/dialog";
import {IProduitServices} from "../services/produit.service";
import {CreateProduitComponent} from "../create-produit/create-produit.component";
import {UpdateProduitComponent} from "../update-produit/update-produit.component";

@Component({
  selector: 'app-list-produit-back',
  templateUrl: './list-produit-back.component.html',
  styleUrls: ['./list-produit-back.component.css']
})
export class ListProduitBackComponent implements OnInit {

  produits: Produit[] = [];
  searchText:any;
  constructor(
    private dialog: MatDialog,
    private service: IProduitServices
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.produits = data;
    })

  }


  openAddDialog() {
    const dialogRef = this.dialog.open(CreateProduitComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateProduitComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(id: any) {
    if(confirm('voulez vous vraiment supprimer ?')){
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }
}
