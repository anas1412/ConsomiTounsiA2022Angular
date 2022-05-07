import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ILivreurService} from "../services/livreur.service";
import {Livreur} from "../model/livreur";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-form-livreur',
  templateUrl: './form-livreur.component.html',
  styleUrls: ['./form-livreur.component.css']
})
export class FormLivreurComponent implements OnInit {
  hide = true;
  livreur: Livreur = new Livreur();
  livreurs: Livreur[] = [];

  ngOnInit(): void {
  }

  add() {
    this.service.save(this.livreur).subscribe(data => this.dialogRef.close())
    console.log(this.myForm.value);
    this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
  // @ts-ignore
  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient,
              private service: ILivreurService,
              private dialogRef: MatDialogRef<FormLivreurComponent>) { }

  get f(){
    return this.myForm.controls;
  }

  // @ts-ignore
  onFileChange(event:any) {

    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        // @ts-ignore
        this.livreur.imgURL = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }
  // @ts-ignore
  public imagePath;
  // @ts-ignore
  livreur:Livreur[];
  imgURL:any;
  // @ts-ignore
  public message: string;

  // @ts-ignore
  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  // @ts-ignore
  @ViewChild('fileInput') fileInput: ElementRef;
  // @ts-ignore
  imgURL = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      // @ts-ignore
      this.imgURL = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        // @ts-ignore
        this.imgURL += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.imgURL= 'Choose File';
    }
  }
}
