import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemandeLivret} from '../model/demande-livret';

@Injectable({
  providedIn: 'root'
})
export class DemandeLivretService{
  private url = environment.apiUrl + '/demandeLivret';
  constructor(private httpClient: HttpClient) { }

  public  getByClient(id): Observable<DemandeLivret[]> {
    return this.httpClient.get<DemandeLivret[]>(this.url + '/client/' + id);
  }

}
