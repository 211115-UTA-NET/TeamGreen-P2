import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { HttpResponse, HttpEvent } from '@angular/common/http';
import { UnitsComponent } from '../units/units.component'
import { User } from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() email = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  user: HttpResponse<User> | undefined;
  verified: boolean | undefined;

  constructor(private userService: UserService ) { }
  
  verify(email: string, password: string): void {
    this.userService.verify(email, password).subscribe(user => this.user = user);
    console.log(this.user);
    if (this.user?.body?.Email == email) {
      this.verified = true;
    } else {
      this.verified = false;
    }
  }


}
