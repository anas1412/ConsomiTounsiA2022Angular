import { Component, OnInit } from '@angular/core';

import {MatDialogRef} from "@angular/material/dialog";
import {Publication} from "../model/publication";
import {PublicationService} from "../services/publication.service";


@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication: Publication = new Publication();
  constructor(
    private service: PublicationService,
    private dialogRef: MatDialogRef<CreatePublicationComponent>
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.publication,1).subscribe(data => this.dialogRef.close())
  }


}
