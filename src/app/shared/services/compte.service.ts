import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Compte} from '../model/compte';



@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private url = environment.apiUrl + '/compte';
  constructor(private httpClient: HttpClient) { }
  public  getByClient(id): Observable<Compte[]> {
    return this.httpClient.get<Compte[]>(this.url + '/client/active/' + id);
  }

}
