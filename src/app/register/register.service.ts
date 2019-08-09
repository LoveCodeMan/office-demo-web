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
export class RegisterService {
  constructor(private http: HttpClient) { }

  register(datas): Observable<any> {
    const data = datas
    console.log(typeof(data))
    console.log("Service所接收到的数据为：" + data)
    return this.http.get('http://localhost:8080/register/userSearch', { params: data }).pipe(tap(response => response));
    console.log("函数已执行")
  }
}

