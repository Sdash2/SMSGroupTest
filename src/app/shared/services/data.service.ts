import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getCitiesList(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/getCitiesList/');
  }
}