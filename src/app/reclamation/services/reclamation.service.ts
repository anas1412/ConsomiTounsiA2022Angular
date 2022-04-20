import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Reclamation} from "../model/reclamation";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IReclamationService {
  private api_url = environment.api_url + 'Reclamation';
  constructor(private http: HttpClient) { }

  public save(reclamation: Reclamation){
    return this.http.post(this.api_url + '/add-Reclamation', reclamation);
  }
  public findAll(){
    return this.http.get(this.api_url + '/retrieve-all-Reclamations');
  }
  public update(reclamation: Reclamation){
    return this.http.put(this.api_url + '/modify-Reclamation', reclamation);
  }
  public findById(id: number){
    return this.http.get(this.api_url + '/retrieve-Reclamation/' + id);
  }
  public delete(id: number){
    return this.http.delete(this.api_url + '/remove-Reclamation/' + id);
  }
}
