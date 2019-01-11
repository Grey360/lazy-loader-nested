import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestApiCallService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    const url = environment.ENDPOINT;
    return this.http.get(url);
  }

  post(): Observable<any> {
    const url = environment.ENDPOINT;
    return this.http.post(url, 'body');
  }
}
