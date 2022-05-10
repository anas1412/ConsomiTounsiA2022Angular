import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePublicationComponent } from '../create-publication/create-publication.component';
import { Publication } from '../model/publication';
import { CommentaireService } from '../services/commentaire.service';
import { PublicationService } from '../services/publication.service';
import { UpdatePublicationComponent } from '../update-publication/update-publication.component';

@Component({
  selector: 'app-list-publication-admin',
  templateUrl: './list-publication-admin.component.html',
  styleUrls: ['./list-publication-admin.component.css']
})
export class ListPublicationAdminComponent implements OnInit {

  isDataAvailable:boolean = false;
  isDataAvailable1:boolean = false;
  isDataAvailable2:boolean = false;
  publications: Publication[] = [];
  title:any;
  p:number = 1 ;
  userpost  :any= [];
  nbrcomm  :any= [];
  id:any;
  form!: FormGroup;
  userpost1  :any= [];
  nbrcomm1  :any= [];
  userpost2  :any= [];
  nbrcomm2  :any= [];
  users:any=[];


  constructor(
    private dialog: MatDialog,
    private service: PublicationService,
    private commService:CommentaireService,
    private formBuilder: FormBuilder,private http:HttpClient,private router:Router
  ) { }

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

  Search(){
    if(this.title==""){
      this.ngOnInit();
    }else{
      this.publications = this.publications.filter(res=>{
        return res.title!.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }

  key:string='id';
  reverse:boolean = false;
  Sort(key:any){
    this.key = key
    this.reverse = !this.reverse;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CreatePublicationComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  openUpdateDialog(id: any) {
    const dialogRef = this.dialog.open(UpdatePublicationComponent, {
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
