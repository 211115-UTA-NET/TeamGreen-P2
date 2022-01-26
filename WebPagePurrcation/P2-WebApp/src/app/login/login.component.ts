import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { UnitsComponent } from '../units/units.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() username = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  verifiedHttp: HttpResponse<boolean> = new HttpResponse<boolean>();
  verified: boolean | null | undefined;

  constructor(private userService: UserService ) { }
  
  verify(username: string, password: string): void {
    this.userService.verify(username, password).subscribe(valid => this.verifiedHttp = valid);
    this.verified = this.verifiedHttp.body;
  }

}
