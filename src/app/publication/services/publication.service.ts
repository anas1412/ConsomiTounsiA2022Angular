import {Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Publication} from "../model/publication";


@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private api_url = environment.api_url + 'publication';
  constructor(private http: HttpClient) { }

  public save(publication: Publication,id:Number){
    return this.http.post(this.api_url + '/add-publication/'+id, publication);
  }
  public GetAllUsers(){
    return this.http.get('http://localhost:8080/SpringMVC/api/auth/ListUser');
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-publications');
  }
  public update(publication: Publication){
    return this.http.put(this.api_url + '/update-publication', publication);
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/find-publication/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-publication/' + id);
  }

  public sortbycomments(id: number){
    return this.http.get(this.api_url + '/sortbycomments/user/'+id);
  }

  public sortbyreactions(id: number){
    return this.http.get(this.api_url + '/sortbyreactions/user/'+id);
  }

  public userPreferences(id: number){
    return this.http.get(this.api_url + '/userPreferences/user/'+id);
  }

}
