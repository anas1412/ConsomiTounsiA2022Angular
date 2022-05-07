import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Reclamation} from "../model/reclamation";
import {IReclamationService} from "../services/reclamation.service";
import {CreateReclamationComponent} from "../create-reclamation/create-reclamation.component";
import {UpdateReclamationComponent} from "../update-reclamation/update-reclamation.component";
import swal from "sweetalert";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";



@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})

export class ListReclamationComponent implements OnInit {
  y: Subscription
  i: number
  type:string
  reclamation:Reclamation
  reclamations: Reclamation[] = [];
  searchText:any;
  @Input() listReclamation: Reclamation[];
  @Output() deleteEvent = new EventEmitter<Reclamation>();
  constructor(
    private dialog: MatDialog,
    private service: IReclamationService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.reclamations =data;
    })

  }


  openAddDialog() {
    const dialogRef = this.dialog.open(CreateReclamationComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(idReclamation: any) {
    const dialogRef = this.dialog.open(UpdateReclamationComponent, {
      width: '400px',
      data: {
        idReclamation
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(idReclamation: any) {
    if(confirm('voulez vous vraiment supprimer ?')){
      this.service.delete(idReclamation).subscribe(r => this.ngOnInit());
    }
  }
  traiterReclamation1(){
    if(this.type)
      this.reclamation.type="Echange"
    this.service.traiterReclamation1().subscribe(
      ()=>this.router.navigate(['/reclamation'])
    )
  }

  traiterReclamation2(){
    if(this.type)
      this.reclamation.type="Remboursement"
    this.service.traiterReclamation2().subscribe(
      ()=>this.router.navigate(['/reclamation'])
    )
  }
  traiterReclamation3(){
    if(this.type)
      this.reclamation.type="Réparation"
    this.service.traiterReclamation3().subscribe(
      ()=>this.router.navigate(['/reclamation'])
    )
  }
  traiterReclamation(){
    if(this.type){
      this.reclamation.type="Réparation"
    this.service.traiterReclamation3().subscribe(
      ()=>this.router.navigate(['/reclamation'])
    )
  }}
}

