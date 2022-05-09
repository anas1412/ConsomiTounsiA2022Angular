import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PublicationService} from "../services/publication.service";
import {Publication} from "../model/publication";


@Component({
  selector: 'app-update-publication',
  templateUrl: './update-publication.component.html',
  styleUrls: ['./update-publication.component.css']
})
export class UpdatePublicationComponent implements OnInit {

  publication: Publication = new Publication();

  constructor(
    private service: PublicationService,
    private dialogRef: MatDialogRef<UpdatePublicationComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.id).subscribe(response => {
      this.publication = response;
    })
  }
  update() {
    this.service.update(this.publication).subscribe(r => this.dialogRef.close())
  }

}
