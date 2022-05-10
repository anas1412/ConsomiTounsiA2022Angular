import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });

    this.getlistUser();
    this.deleteUser(this.id);
  }
  p: number = 1
  pageOp:number=1
  search:string=""

id:any
listUser: any;
  getlistUser(){
    this.authService.getlistUser().subscribe(data => {
      (this.listUser = data)
      console.log(data);
    })

   

}
deleteUser(id:any){
  this.authService.deleteUser(id).subscribe();
}

elementType= NgxQrcodeElementTypes.URL
        correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH
        value=""

}
