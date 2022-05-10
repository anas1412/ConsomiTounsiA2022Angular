import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Cagnotte } from '../model/cagnotte';
import { CagnotteService } from '../services/cagnotteservice';

@Component({
  selector: 'app-create-cagnotte',
  templateUrl: './create-cagnotte.component.html',
  styleUrls: ['./create-cagnotte.component.css']
})
export class CreateCagnotteComponent implements OnInit {
  cagnotte: Cagnotte = new Cagnotte();
  constructor(

    private services: CagnotteService,
    private dialogRef: MatDialogRef<CreateCagnotteComponent>
  ) { }

  ngOnInit(): void {
   
  }
  add() {
    this.services.save(this.cagnotte).subscribe(data => this.dialogRef.close())
  }

}
