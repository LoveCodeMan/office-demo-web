import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  login(datas): Observable<any> {
    // return this.http.get('http://localhost:8080/toy/getInfoList').pipe(
    //   tap(response => response));
    console.log("success!!")
  }
}

