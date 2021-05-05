import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = environment.apiUrl + '/client';
  constructor(private httpClient: HttpClient) { }
  changePassword(pwd: any): Observable<any> {
    return this.httpClient.patch<any>(this.url + '/changePassword',
      pwd);
  }
}
