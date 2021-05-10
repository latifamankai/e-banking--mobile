import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoursChange} from '../model/cours-change';



@Injectable({
  providedIn: 'root'
})
export class CoursChangeService {
  private url = environment.apiUrl + '/cours-change';
  constructor(private httpClient: HttpClient) { }
  public  getByDevise(id): Observable<CoursChange[]> {
    return this.httpClient.get<CoursChange[]>(this.url + '/devise/' + id);
  }

}
