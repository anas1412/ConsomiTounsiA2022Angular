import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cagnotte } from '../model/cagnotte';
import { CagnotteService } from '../services/cagnotteservice';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-create-cagnotte',
  templateUrl: './create-cagnotte.component.html',
  styleUrls: ['./create-cagnotte.component.css']
})
export class CreateCagnotteComponent implements OnInit {
  cagnotte: Cagnotte = new Cagnotte();
  currentUser: any;
  constructor(

    private services: CagnotteService,
    private dialogRef: MatDialogRef<CreateCagnotteComponent>,
    private token: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);

  }
  add() {
    this.services.save(this.cagnotte,this.currentUser.id).subscribe(data => this.dialogRef.close())
  }

}
