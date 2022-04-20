import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Produit} from "../model/produit";
import {IProduitServices} from "../services/produit.service";
import {CreateProduitComponent} from "../create-produit/create-produit.component";
import {UpdateProduitComponent} from "../update-produit/update-produit.component";
import {environment} from "../../../environments/environment";
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

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
