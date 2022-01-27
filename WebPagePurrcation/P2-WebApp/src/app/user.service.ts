import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { User } from './user';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private verifyUrl = 'https://purrcationapi.azurewebsites.net/VerifyCredentials/';

  httpOptions: any;

  

  constructor(private http: HttpClient) { }

  verify(email: string, password: string): Observable<HttpResponse<User>> {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      //params: new HttpParams().set('username', email)
    };
    return this.http.get<User>(this.verifyUrl + email, { observe: 'response'}/**this.httpOptions*/);
  }
}
//{headers: {'email': email}, observe: 'response'} headers: {'email': email},