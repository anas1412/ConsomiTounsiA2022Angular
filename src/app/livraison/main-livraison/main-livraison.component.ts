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
import {keyframes} from "@angular/animations";


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

  pdelivered:any
  pundelivered:any
  countliv:any
  undelivered:any
  delivered:any
  generateChart (){

    this.livraisonService.CountDelievered().subscribe(
      // @ts-ignore
      (data: number) => {
        this.x1 = data
        localStorage.setItem('delivered', this.x1);
        console.log(this.x1)
      }
    )
  }


  ngOnInit(): void {
    this.loadLivraisons()
this.generateChart()
    this.countliv = Number(localStorage.getItem('countLivraison'));
    console.log("Nombre de livraison " + this.countliv)
    this.delivered = localStorage.getItem('delivered')
    console.log("Délivrée " + this.delivered)
    this.undelivered = Number(this.countliv) - Number(this.delivered)
    console.log("Non Délivrée " + this.undelivered)
    this.pundelivered = ((this.undelivered / Number(this.countliv)) * 100)
    this.pdelivered = 100 - this.pundelivered
    console.log("pourcentage undelivered: " + this.pundelivered)
    console.log("pourcentage delivered: " + this.pdelivered)

    this.GoogleChartInterface = {

      chartType: GoogleChartType.PieChart,
      dataTable: [
        ['Livraison non delivrée', 'Livraison  delivrée'],
        ['delivered', this.pdelivered],
        ['undelivered', this.pundelivered],

      ],
      //firstRowIsData: true,
      options: {'title': 'Delivery'},
    };
  }


  //Get list of livraisons
  loadLivraisons() {
    this.Livraison = this.livraisonService.CurrentLivraison
    return this.livraisonService.findAll().subscribe((data) => {
      this.Livraison = data;
      this.countLivraison = this.Livraison.length
      localStorage.setItem('countLivraison', this.countLivraison);
    })
  }


  return() {
    this.router.navigate(['/livreur'])

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
  GoogleChartInterface: any;
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
    this.ngOnInit();

  }

}


