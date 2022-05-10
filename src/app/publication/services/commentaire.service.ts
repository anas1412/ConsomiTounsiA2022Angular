import {Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Publication} from "../model/publication";
import { Commentaire } from '../model/commentaire';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private api_url = environment.api_url + 'commentaire';
  constructor(private http: HttpClient) { }

  public save(commentaire: Commentaire,idPub:number,idUser:number){
    return this.http.post(this.api_url + '/add-commentaire/'+idPub+'/'+idUser, commentaire);
  }


  public findByPub(id: number): Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(this.api_url + '/retrieve-publicationcomments/' + id);
  }

  public delete(id: number){
    return this.http.delete(this.api_url + '/delete-commentaire/' + id);
  }


  public uodate(commentaire: Commentaire){
    return this.http.put(this.api_url + '/update-commentaire',commentaire);
  }

}