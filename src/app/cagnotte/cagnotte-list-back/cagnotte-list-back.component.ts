import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCagnotteComponent } from '../create-cagnotte/create-cagnotte.component';
import { Cagnotte } from '../model/cagnotte';
import { CagnotteService } from '../services/cagnotteservice';
import { UpdateCagnotteComponent } from '../update-cagnotte/update-cagnotte.component';

@Component({
  selector: 'app-cagnotte-list-back',
  templateUrl: './cagnotte-list-back.component.html',
  styleUrls: ['./cagnotte-list-back.component.css']
})
export class CagnotteListBackComponent implements OnInit {
  cagnotte: Cagnotte[] = [];
  constructor(

    private dialog: MatDialog,
    private service: CagnotteService
  ) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.cagnotte = data;
  })
}
  openAddDialog() {
    const dialogRef = this.dialog.open(CreateCagnotteComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdateCagnotteComponent, {
      width: '400px',
      data: {
        id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(id: any) {
   
    if (confirm('voulez vous vraiment supprimer ?')) {
      this.service.delete(id).subscribe(r => this.ngOnInit());
    }
  }

}
