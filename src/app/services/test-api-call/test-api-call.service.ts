import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestApiCallService {

  private data = new BehaviorSubject('Jeremy');
  currentData = this.data.asObservable();

  constructor(private http: HttpClient) { }

  changeShare(data: string) {
    this.data.next(data);
  }

  get(): Observable<any> {
    const url = environment.ENDPOINT;
    return this.http.get(url);
  }

  post(): Observable<any> {
    const url = environment.ENDPOINT;
    return this.http.post(url, 'body');
  }
}
