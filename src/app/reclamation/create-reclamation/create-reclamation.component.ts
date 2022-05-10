import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../model/reclamation";
import {IReclamationService} from "../services/reclamation.service";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ILivreurService} from "../../livreur/services/livreur.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
interface type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {

  reclamation: Reclamation = new Reclamation();
  constructor(
    private service: IReclamationService,
    private dialogRef: MatDialogRef<CreateReclamationComponent>,
  private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.reclamation, 1, 1).subscribe(data => this.dialogRef.close())
  }
}
