import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { UnitsComponent } from '../units/units.component'
import { User } from '../user'
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent {

  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  userhttp: HttpResponse<User[]> | undefined;
  public user: User[] | undefined | null;
  verified: boolean | undefined;
  parsed: any;

  constructor(private userService: UserService, private http: HttpClient ) { }
  
  verify(email: string, password: string): void {
    this.userService.verify(email, password).subscribe(response => {
      this.http.jsonp;
      this.userhttp = response;
      this.user = <User[]>this.userhttp?.body;
    console.log(this.user);
    console.log(this.userhttp);
    console.log("emails");
    console.log(this.user[0].Email);
    console.log(this.userhttp?.body);
    if(this.user[0].Email == email) {
      this.verified = true;
    } else {
      this.verified = false;
    }
    });
  }
}
