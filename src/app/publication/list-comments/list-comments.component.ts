import {Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { CommentaireService } from '../services/commentaire.service';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  commentaires: Commentaire[] = [];
  edit=true;
  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: PublicationService,
    private commService:CommentaireService,
    private dialogRef: MatDialogRef<ListCommentsComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA)  private data: any
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content:'',
    });

    this.commService.findByPub(this.data.id).subscribe(data => {
      this.commentaires =data;
      console.log(data)
    })
  }

  supprimer(id: any,i:any) {
    if(i==1){
      if (confirm('voulez vous vraiment supprimer ?')) {
        this.commService.delete(id).subscribe(r => this.ngOnInit());
      }
    }else{
      confirm('You Cant Delete this ')
    }
  }


  update(id: any,comm:any) {
    console.log(comm)
    if(id==1){
      comm.content=this.form.get(['content'])!.value;;
      comm.updatedAt=Date.now();
      if (confirm('voulez vous vraiment Update it ?')) {
        this.commService.uodate(comm).subscribe(r => this.ngOnInit());
        this.router.navigate(['/publication']).then(()=>{
          location.reload() ;
        });
      }
    }else{
      confirm('You Cant Update this ')
    }
  }
}
