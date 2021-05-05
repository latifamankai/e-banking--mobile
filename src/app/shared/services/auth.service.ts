import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl + '/login';

  constructor(private httpClient: HttpClient) {
  }


  public login(client: Client): Observable<any> {
    return this.httpClient.post(this.url + '/client', client);
  }

  public storeTocken(token: string): void {
    localStorage.setItem('token', token);
  }


  logout(): void {
    localStorage.clear();
    location.reload();
  }
}
