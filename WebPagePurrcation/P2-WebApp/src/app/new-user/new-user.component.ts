import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  first_name: string = "";
  last_name: string = "";
  password: string = "";
  email: string = "";
  user_type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitNewUser(): void {

  }

}
