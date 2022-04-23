import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";

import {Stock} from "../model/stock";
import {IStockService} from "../services/stock.service";
import {CreateStockComponent} from "../create-stock/create-stock.component";
import {UpdateStockComponent} from "../update-stock/update-stock.component";
import {Produit} from "../../Produit/model/produit";


@Component({
  selector: 'app-list-stock',
  templateUrl: './list-stock.component.html',
  styleUrls: ['./list-stock.component.css']
})
export class ListStockComponent implements OnInit {

  stocks: Stock[] = [];
  idStock: any;
  searchText:any;
  popup: boolean=false;
  constructor(
    private dialog: MatDialog,
    private service: IStockService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.stocks = data;
    })

  }


  openAddDialog() {
    const dialogRef = this.dialog.open(CreateStockComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateStockComponent, {
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

  Onpopup(idStock: any){
    this.idStock = idStock;
    this.popup = true;
  }

}
