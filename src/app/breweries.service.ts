import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './config/constants';
@Injectable({
  providedIn: 'root',
})
export class BreweriesService {
  constructor(private http: HttpClient, private constants: Constants) {}

  // public get(url: string, options?: any) {
  //   return this.http.get(url, options);
  // }
  getData(): Observable<any> {
    return this.http.get<any>(this.constants.BASE_API_ENDPOINT);
  }
}
