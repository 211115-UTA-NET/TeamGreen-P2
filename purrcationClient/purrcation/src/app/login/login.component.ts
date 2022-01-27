import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
//import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { HttpResponse, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  //user: HttpResponse<User> | undefined;
  verified: boolean | undefined;




}
