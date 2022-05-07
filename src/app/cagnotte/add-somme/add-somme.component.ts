import { Component, Inject, OnInit } from '@angular/core';
import { Cagnotte } from '../model/cagnotte';
import { CagnotteService } from '../services/cagnotteservice';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-somme',
  templateUrl: './add-somme.component.html',
  styleUrls: ['./add-somme.component.css']
})
export class AddSommeComponent implements OnInit {
  cagnotte: Cagnotte = new Cagnotte();

  constructor(

    private serviceC: CagnotteService,
    private dialogRef: MatDialogRef<AddSommeComponent>,
    @Inject(MAT_DIALOG_DATA)  private dataC: any
  ) { }

  ngOnInit(): void {

    this.serviceC.findById(this.dataC.id).subscribe(response => {
      this.cagnotte= response;
    })
  }

  updateC() {
    this.serviceC.update(this.cagnotte).subscribe(r => this.dialogRef.close())
  }

}
