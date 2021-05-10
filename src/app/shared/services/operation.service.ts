import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Operation} from '../model/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private url = environment.apiUrl + '/operation';
  constructor(private httpClient: HttpClient) { }
  public  getByCompte(id): Observable<Operation[]> {
    return this.httpClient.get<Operation[]>(this.url + '/compte/' + id);
  }
}
