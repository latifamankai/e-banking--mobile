import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DemandeCarte} from "../model/demande-carte";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DemandeCarteService {
  private url = environment.apiUrl + '/demandeCarte';
  constructor(private httpClient: HttpClient) { }

  public  getByClient(id): Observable<DemandeCarte[]> {
    return this.httpClient.get<DemandeCarte[]>(this.url + '/client/' + id);
  }

}
