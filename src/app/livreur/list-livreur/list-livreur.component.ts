import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Livreur} from "../model/livreur";
import {ILivreurService} from "../services/livreur.service";
import {FormLivreurComponent} from "../form-livreur/form-livreur.component";
import {UpdateLivreurComponent} from "../update-livreur/update-livreur.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Livraison} from "../../livraison/model/livraison";
import swal from "sweetalert";


@Component({
  selector: 'app-list-livreur',
  templateUrl: './list-livreur.component.html',
  styleUrls: ['./list-livreur.component.css']
})
export class ListLivreurComponent implements OnInit {
  livreurdetail?: Livreur;
  popup: boolean=false;
  livreurs: Livreur[] = [];
  searchText:any;
  // @ts-ignore
  currentLivreur:Livreur;
  // @ts-ignore
  livreur:Livreur;
  Livraison: any= [];
  id:any
  idliv:any
  Livreur: any = [];
livraison:Livraison
  map:any;
  @ViewChild('mapElement') mapElement:any;
  constructor(
    private dialog: MatDialog,
    private service: ILivreurService,
  private activated:ActivatedRoute,
  private router: Router,
    livreurservice: ILivreurService
  ) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.livreurs = data;
    })
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(FormLivreurComponent, {
      width: '800px',
      height:'700px'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
  openUpdateDialog(idLivreur: any) {
    const dialogRef = this.dialog.open(UpdateLivreurComponent, {
      width: '800px',
      height:'700px',
      data: {
        idLivreur
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  supprimer(idLivreur: any) {
    if(confirm('voulez vous vraiment supprimer ?')){
      this.service.delete(idLivreur).subscribe(r => this.ngOnInit());
    }
  }
  Onpopup(livreur: Livreur){
    this.livreurdetail= livreur;
    this.popup = true;
  }

  accepter(livreur: Livreur)
  {
    this.livreur=this.currentLivreur;
    livreur.statutCompte=true
    this.service.acceptLivreur(livreur).subscribe(
      ()=>this.router.navigate(['/livreur']))

  }

  delete(livreur: Livreur) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this delivery man!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.Livreur.indexOf(livreur)

          // @ts-ignore
          this.service.delete(livreur.idLivreur).subscribe(
            ()=>this.Livreur.splice(i,1)
          )
          ;
          swal("Delivery man has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Delivery man is safe!");
        }
      });

  }
}
