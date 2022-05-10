import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {Publication} from "../model/publication";
import {PublicationService} from "../services/publication.service";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication: Publication = new Publication();
  currentUser: any;
  constructor(
    private service: PublicationService,
    private dialogRef: MatDialogRef<CreatePublicationComponent>,
    private token: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);
  }

  add() {
    this.service.save(this.publication, this.currentUser.id).subscribe(data => this.dialogRef.close())
  }


}
