import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Conent-Type': 'application/json' })
// }
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
};

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    console.log(data)
    return this.http.post('http://10.110.36.75:8799/bspEx/user/login', data, httpOptions).pipe(
      tap(response => response));
  }
}

