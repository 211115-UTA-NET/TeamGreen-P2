import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  num: number = 0;

  constructor(private userService: UserService ) { }

  saveValues(email: string, password: string): void {
    console.log("1");
    this.verify(email, password).subscribe( res => {console.log(res); if (res.status==200) {this.num=1}else{this.num=2}});
  }

  verify(email: string, password: string): Observable<HttpResponse<any>> {
    console.log("2");
    return this.userService.verify(email, password);
    
  }

}
