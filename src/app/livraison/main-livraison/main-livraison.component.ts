// @ts-ignore

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import {ILivraisonService} from "../services/livraison.service";
import swal from "sweetalert";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import { Livraison } from '../model/livraison';
import {Chart} from "chart.js";
import {Livreur} from "../../livreur/model/livreur";
import {GoogleChartInterface, GoogleChartType} from "ng2-google-charts";


@Component({
  selector: 'app-main-livraison',
  templateUrl: './main-livraison.component.html',
  styleUrls: ['./main-livraison.component.css']
})
export class MainLivraisonComponent implements OnInit {
  livraison: Livraison;
id:any
  x1: any;
  x: any
  x2: any;
  undelivered: number;
  delivered: number;
  Livraison: any = [];
  searchText: any;
  http: HttpClient;
  y: Subscription
  i: number
  countLivraison: any;
  currentLivraison:Livraison;
  // @ts-ignore
  @Input() listLivraison: Livraison[];
  @Output() deleteEvent = new EventEmitter<Livraison>();
  @Output() updateEvent = new EventEmitter<Livraison>();
  constructor(private livraisonService: ILivraisonService, private router: Router) {
  }


  // @ts-ignore

  pieChart: GoogleChartInterface = {
      chartType: GoogleChartType.PieChart,
      dataTable: [
        // @ts-ignore
        ['Livraison non delivrée', 'Livraison  delivrée'],
        // @ts-ignore
        ['delivered',  3],
        // @ts-ignore
        ['undelivered', 1],

      ],
      options: {'title': 'Delivery'},
    };

  //Get list of livraisons
  loadLivraisons() {
    this.Livraison = this.livraisonService.CurrentLivraison
    return this.livraisonService.findAll().subscribe((data) => {
      this.Livraison = data;
      this.countLivraison = this.Livraison.length
      localStorage.setItem('countLivraison', this.countLivraison);
    })
  }

  ngOnInit(): void {
    this.loadLivraisons()

    let countliv = Number(localStorage.getItem('countLivraison'));
    console.log("Nombre de livraison " + countliv)
    let delivered = localStorage.getItem('delivered')
    console.log("Délivrée " + delivered)
    let undelivered = Number(countliv) - Number(delivered)
    console.log("Non délivrée " + undelivered)

    let pundelivered = ((undelivered / Number(countliv)) * 100)
    let pdelivered = 100 - pundelivered
    console.log("pourcentage undelivered: " + pundelivered)
    console.log("pourcentage delivered: " + pdelivered)
  }

  return() {
    this.router.navigate(['/livreur'])

  }
  generateChart (x:number ){

    this.livraisonService.CountDelievered().subscribe(
      // @ts-ignore
      (data: number) => {
        this.x1 = data
        localStorage.setItem('delivered', this.x1);
        console.log(this.x1)
        return this.x1
      }
    )
    this.livraisonService.CountUndelievered().subscribe(
      // @ts-ignore
      (data: number) => {
        this.x2 = data
        localStorage.setItem('undelivered', this.x2);
        console.log(this.x2)
        return this.x2
      }
    );

  }
  //update
  update(livraison: Livraison)
  {
    this.livraison=this.currentLivraison;
    livraison.statusLiv=true
    this.livraisonService.update(livraison).subscribe(
      ()=>this.router.navigate(['/livraison']))

  }

  // Delete livraison
  delete(livraison: Livraison) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this delivery!",
      icon: "warning",
      buttons: ["Cancel","Confirm"],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          let i =this.Livraison.indexOf(livraison)

          // @ts-ignore
          this.livraisonService.delete(livraison.idLivraison).subscribe(
            ()=>this.Livraison.splice(i,1)
          )
          ;
          swal("Delivery has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Delivery  is safe!");
        }
      });

  }

  deliverLivraison(id:number)
  {
    this.livraison=this.currentLivraison;

    // @ts-ignore
    Livraison.statusLiv=true;
    this.livraisonService.deliverLivraison(id).subscribe(
      ()=>this.router.navigate(['/livraison']))

  }

}


