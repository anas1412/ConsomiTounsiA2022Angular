import { Component, OnInit } from '@angular/core';
import {UpdateReclamationComponent} from "../reclamation/update-reclamation/update-reclamation.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateReclamationComponent} from "../reclamation/create-reclamation/create-reclamation.component";
import {ReclamationFrontComponent} from "../reclamation/reclamation-front/reclamation-front.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(ReclamationFrontComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }}
