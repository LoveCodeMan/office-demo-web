import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencoded; charset=utf-8' })
// };

@Injectable()
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(data): Observable<any> {
    return this.http.post('http://localhost:8080/register/userSearch', { username: data }, httpOptions).pipe(tap(response => response));
  }

  submit(data): Observable<any> {
    return this.http.post('http://localhost:8080/register/userSave',  data, httpOptions ).pipe(tap(response => response))
  }
}

