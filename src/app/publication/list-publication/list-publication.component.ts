import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {Publication} from "../model/publication";
import {PublicationService} from "../services/publication.service";
import {CommentaireService} from "../services/commentaire.service";

import {CreatePublicationComponent} from "../create-publication/create-publication.component";

import {UpdatePublicationComponent} from "../update-publication/update-publication.component"
import { Commentaire } from '../model/commentaire';
import { ListCommentsComponent } from '../list-comments/list-comments.component';
import { ReactionService } from '../services/reaction.service';
import { Reaction } from '../model/reaction';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import {TokenStorageService} from "../../_services/token-storage.service";
@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.css']
})
export class ListPublicationComponent implements OnInit {


  publications: Publication[] = [];
  commentaire: Commentaire = new Commentaire();
  reaction: Reaction = new Reaction();
  form!: FormGroup;
  currentUser: any;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: PublicationService,
    private commService:CommentaireService,
    private reactionService:ReactionService,
    private router:Router,
    private token: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content:'',
    });
    this.service.findAll().subscribe(data => {
      // @ts-ignore
      this.publications = data;
      console.log(data)
    })
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);

    console.log(this.currentUser.id);
  }

  findByPub(id:any):any{
    const dialogRef = this.dialog.open(ListCommentsComponent, {
      width: '50%',
      data: {
        id
      }
    });
  }

  getCount(name:string,list:any) {
    return list.filter((o:any) => o.type === name).length;
  }

  addComment(id:any){
    this.commentaire.content=this.form.get(['content'])!.value;
    this.commentaire.postedAt=new Date();
    this.commService.save(this.commentaire,id,this.currentUser.id)
    .pipe(map((data)=>data))
    .toPromise()
    .then((response)=>{
      this.router.navigate(['/publication']).then(()=>{
        location.reload() ;
      });
    }).catch((error:HttpErrorResponse)=>{
      console.log(error)
    })
  }


  addReaction(id:any,type:any,reaction:any){

    this.reaction.type = type;

    if(reaction.length>0){

      for (var key in reaction) {
        console.log(reaction[key].user.id)
        if (reaction[key].user.id==this.currentUser.id) {
          this.reactionService.delete(reaction[key].idReaction).subscribe();
          this.router.navigate(['/publication']).then(()=>{
            location.reload() ;
          });
          return;
        }
        else {
          this.reactionService.save(this.reaction,id,this.currentUser.id).subscribe();
          this.router.navigate(['/publication']).then(()=>{
            location.reload() ;
          });
        }
      }
    }else {
      this.reactionService.save(this.reaction,id,this.currentUser.id).subscribe();
      this.router.navigate(['/publication']).then(()=>{
        location.reload() ;
      });
    }
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
