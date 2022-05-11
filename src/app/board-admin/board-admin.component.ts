import { Component, OnInit, EventEmitter, Input } from '@angular/core';

import { UserService } from '../_services/user.service';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";
import {ILivraisonService} from "../livraison/services/livraison.service";
import { ResolveEnd,Router} from "@angular/router";
import {GoogleChartType} from "ng2-google-charts";
import {PublicationService} from "../publication/services/publication.service";
import {CommentaireService} from "../publication/services/commentaire.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Publication} from "../publication/model/publication";
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content?: string;
  id:any
  x1: any;
  x: any
  x2: any;
  isDataAvailable:boolean = false;
  isDataAvailable1:boolean = false;
  isDataAvailable2:boolean = false;
  publications: Publication[] = [];
  Livraison: any = [];
  searchText: any;
  http: HttpClient;
  userpost  :any= [];
  nbrcomm  :any= [];
  form!: FormGroup;
  userpost1  :any= [];
  nbrcomm1  :any= [];
  userpost2  :any= [];
  nbrcomm2  :any= [];
  y: Subscription
  i: number
  countLivraison: any;
  users:any=[];


  constructor(private userService: UserService,private livraisonService: ILivraisonService,
  private service: PublicationService,
  private commService:CommentaireService,
                           private authService:AuthService,
  private formBuilder: FormBuilder,private router:Router) { }

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
  GoogleChartInterface: any;
  ngOnInit(): void {
    this.service.GetAllUsers().subscribe(data => {
      // @ts-ignore
      this.users=data;
      console.log(this.users)
    })
    this.sortbycomments(JSON.parse(localStorage.getItem('user')!));
    this.sortbyreactions(JSON.parse(localStorage.getItem('user')!));
    this.userPreferences(JSON.parse(localStorage.getItem('user')!));
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.publications = data;
    })
    this.form = this.formBuilder.group({
      user:'',
    });

    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }




    });

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
  loadLivraisons() {
    // @ts-ignore
    this.Livraison = this.livraisonService.CurrentLivraison
    return this.livraisonService.findAll().subscribe((data) => {
      this.Livraison = data;
      this.countLivraison = this.Livraison.length
      localStorage.setItem('countLivraison', this.countLivraison);
    })
  }


  async somethingChanged(){
    localStorage.setItem('user', JSON.stringify(this.form.controls['user'].value));
    window.location.reload()
  }
  //sort by comments
  sortbycomments(id:any) {
    let object = new Object();
    this.service.sortbycomments(id)
      .subscribe(data => {
        object = data;
        for (let index = 0; index < Object.keys(object).length; index++) {
          this.userpost.push(Object.keys(object)[index]);
          this.nbrcomm.push(Object.values(object)[index]);
        }
        this.isDataAvailable = true;
      })
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = this.userpost;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: this.nbrcomm, label: 'Nbr Comments A'}
  ];


  //sort by reactions
  sortbyreactions(id:any) {
    let object = new Object();
    this.service.sortbyreactions(id)
      .subscribe(data => {
        object = data;
        for (let index = 0; index < Object.keys(object).length; index++) {
          this.userpost1.push(Object.keys(object)[index]);
          this.nbrcomm1.push(Object.values(object)[index]);
        }
        this.isDataAvailable1 = true;
      })
  }
  public barChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels1 = this.userpost1;
  public barChartType1 = 'bar';
  public barChartLegend1 = true;
  public barChartData1 = [
    {data: this.nbrcomm1, label: 'Nbr reactions A'}
  ];

  //sort by userPreferences
  userPreferences(id:any) {
    let object = new Object();
    this.service.userPreferences(id)
      .subscribe(data => {
        object = data;
        for (let index = 0; index < Object.keys(object).length; index++) {
          this.userpost2.push(Object.keys(object)[index]);
          this.nbrcomm2.push(Object.values(object)[index]);
        }
        this.isDataAvailable2 = true;
      })
  }
  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels2 = this.userpost2;
  public barChartType2 = 'bar';
  public barChartLegend2 = true;
  public barChartData2 = [
    {data: this.nbrcomm2, label: 'Nbr Preferences A'}
  ];

}
