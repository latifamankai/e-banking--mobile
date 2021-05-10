import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemandeChequier} from '../model/demande-chequier';
import {Compte} from '../model/compte';

@Injectable({
  providedIn: 'root'
})
export class DemandeChequierService{
  private url = environment.apiUrl + '/demandeChequier';
  constructor(private httpClient: HttpClient) { }

  public  getByClient(id): Observable<DemandeChequier[]> {
    return this.httpClient.get<DemandeChequier[]>(this.url + '/client/' + id);
  }

}
