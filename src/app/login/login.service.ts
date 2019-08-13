import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Conent-Type': 'application/json' })
}
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencoded; charset=utf-8' })
// };

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(datas): Observable<any> {
    const data = datas
    return this.http.get('http://localhost:8080/user/userConfirm', { params: data }).pipe(
      tap(response => response));
  }
}
