import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Cagnotte } from "../model/cagnotte";

@Injectable({
    providedIn: 'root'
})
export class CagnotteService {
    private api_url = environment.api_url + 'cagnotte';
    constructor(private http: HttpClient) { }

    public save(cagnotte: Cagnotte) {
        return this.http.post(this.api_url + '/add-getCagnotte', cagnotte);
    }
    public findAll() {
        return this.http.get(this.api_url + '/getAllCagnotte');
    }
    public update(cagnotte: Cagnotte) {
        return this.http.put(this.api_url + '/modify-cagnotte', cagnotte);
    }
    public findById(id: number) {
        return this.http.get(this.api_url + '/getCagnotte/' + id);
    }
    public delete(id: number) {
        return this.http.delete(this.api_url + '/remove-cagnotte/' + id);
    }

    public saveS(cagnotte: Cagnotte) {
        return this.http.put(this.api_url + '/modify-somme', cagnotte);
    }
}