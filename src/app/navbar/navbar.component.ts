import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
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
/////
  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;

  }
/////
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  user =  this.tokenStorageService.getUser();
  admin : any ;




  constructor(private tokenStorageService: TokenStorageService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.admin = this.user.roles.includes("ROLE_ADMIN");

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
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

