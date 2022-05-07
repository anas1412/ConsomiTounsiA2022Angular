import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSommeComponent } from '../add-somme/add-somme.component';
import { CreateCagnotteComponent } from '../create-cagnotte/create-cagnotte.component';
import { Cagnotte } from '../model/cagnotte';
import { CagnotteService } from '../services/cagnotteservice';
import { UpdateCagnotteComponent } from '../update-cagnotte/update-cagnotte.component';

@Component({
  selector: 'app-list-front-cagnotte',
  templateUrl: './list-front-cagnotte.component.html',
  styleUrls: ['./list-front-cagnotte.component.css']
})
export class ListFrontCagnotteComponent implements OnInit {

  cagnotte: Cagnotte[] = [];
  popup: boolean=false;
  cagnottdetail?: Cagnotte;
  constructor(

    private dialog: MatDialog,
    private service: CagnotteService
  ) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.cagnotte = data;
  })
}
 
  

 openAddDialog2(id: any) {
    const dialogRef = this.dialog.open(AddSommeComponent, {
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

  Onpopup(cagnotte: Cagnotte){
    this.cagnottdetail= cagnotte;
    this.popup = true;
  }
}
