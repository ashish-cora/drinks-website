import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Constants } from './config/constants';

@Injectable({
  providedIn: 'root',
})
export class BreweriesService {
  url: string = this.constants.POST_API_ENDPOINT;

  constructor(private http: HttpClient, private constants: Constants) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.constants.BASE_API_ENDPOINT);
  }

  postData(phone: string[]) {
    return this.http
      .post<any>(this.url, phone)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  fetchValue(): Observable<any> {
    return this.http.get<any>(this.constants.BASE_API_ENDPOINT);
  }
}
