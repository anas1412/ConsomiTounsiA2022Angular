import { Component, OnInit } from '@angular/core';
import {IReclamationService} from "../services/reclamation.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {Reclamation} from "../model/reclamation";
import {CreateReclamationComponent} from "../create-reclamation/create-reclamation.component";
import {UpdateReclamationComponent} from "../update-reclamation/update-reclamation.component";
import {Livraison} from "../../livraison/model/livraison";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-reclamation-front',
  templateUrl: './reclamation-front.component.html',
  styleUrls: ['./reclamation-front.component.css']
})
export class ReclamationFrontComponent implements OnInit {
  reclamation: Reclamation = new Reclamation();
  id:any;
  livraison:Livraison[];
  currentUser: any

  constructor(
    private service: IReclamationService,
    private dialogRef: MatDialogRef<ReclamationFrontComponent>,
    private http: HttpClient,
    private dialog: MatDialog,
    private token: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);
  }
  add() {
    // @ts-ignore
    this.service.save(this.reclamation,  this.currentUser.id,1).subscribe(data => this.dialogRef.close())
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(CreateReclamationComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(idReclamation: any) {
    const dialogRef = this.dialog.open(UpdateReclamationComponent, {
      width: '400px',
      data: {
        idReclamation
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

}
