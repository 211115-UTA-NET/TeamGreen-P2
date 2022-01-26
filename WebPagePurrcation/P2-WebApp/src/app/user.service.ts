import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private verifyUrl = 'https://localhost:7112';//'https://purrcationapi.azurewebsites.net/VerifyCredentials/3';

  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
       
    })
  };

  

  constructor(private http: HttpClient) { }

  verify(email: string, password: string): Observable<HttpResponse<any>> {
    console.log("3");
    return this.http.get<any>(this.verifyUrl, {headers: {'email': email, 'password': password}, observe: 'response'});
  }
}
