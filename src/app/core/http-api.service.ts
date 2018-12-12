import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpApiService {
  constructor(
    public httpClient: HttpClient,
  ) {}

  delete(endpoint: string, reqOpts?: any): Observable<any> {
    return this.httpClient
      .delete(endpoint, reqOpts);
  }

  get<T>(endPoint: string): Observable<T> {
    return this.httpClient
      .get<T>(endPoint);
  }

  post(endPoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.httpClient
      .post(endPoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<any> {
    return this.httpClient
      .put(endpoint, body, reqOpts);
  }
}

