import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Event } from "../model/event";
import { Cagnotte } from "../../cagnotte/model/cagnotte";

@Injectable({
    providedIn: 'root'
  })

  export class EventService {
    private api_url = environment.api_url + 'event';
    constructor(private http: HttpClient) { }
  
    public save(event: Event,idCagnotte:Number){
      return this.http.post(this.api_url + '/add-getEvent/'+ idCagnotte,event);
    }
    public findAll(){
      return this.http.get(this.api_url + '/getAllEvent');
    }
    public update(event: Event){
      return this.http.put(this.api_url + '/modify-event', event);
    }
    public findById(id: number){
      return this.http.get(this.api_url + '/getEvent/' + id);
    }
    public delete(id: number){
      return this.http.delete(this.api_url + '/remove-event/' + id);
    }
  
  
  }