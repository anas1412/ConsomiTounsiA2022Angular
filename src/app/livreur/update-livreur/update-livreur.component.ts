import {Component, Inject, OnInit} from '@angular/core';
import {Livreur} from "../model/livreur";
import {ILivreurService}
  from "../services/livreur.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-livreur',
  templateUrl: './update-livreur.component.html',
  styleUrls: ['./update-livreur.component.css']
})
export class UpdateLivreurComponent implements OnInit {
  livreur: Livreur = new Livreur();
  hide = true;

  constructor(
    private service: ILivreurService,
    private dialogRef: MatDialogRef<UpdateLivreurComponent>,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.service.findById(this.data.idLivreur).subscribe(response => {
      this.livreur = response;
    })
  }


  update() {
    this.service.update(this.livreur).subscribe(r => this.dialogRef.close())
  }
  // @ts-ignore
  public imagePath;
  imgURL: any;
  // @ts-ignore
  public message: string;

  // @ts-ignore
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
}
