import {Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Publication} from "../model/publication";
import { Commentaire } from '../model/commentaire';
import { Observable } from 'rxjs';
import { Reaction } from '../model/reaction';


@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  private api_url = environment.api_url + 'reaction';
  constructor(private http: HttpClient) { }

  public save(reaction: Reaction,idPub:number,idUser:number){
    return this.http.post(this.api_url + '/add-reaction/'+idPub+'/'+idUser, reaction);
  }


  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-reaction/' + id);
  }
}