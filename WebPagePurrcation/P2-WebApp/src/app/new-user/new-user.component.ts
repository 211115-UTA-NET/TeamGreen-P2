import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  title = 'purrcation';
  data2: any = {};
  public data:any = []

  constructor(private http: HttpClient, private location: Location) {}
  
  
  postData(info: string){
    
    const url ='https://localhost:7112/signup/?user='+info;
    this.http.get(url).subscribe((res)=>{
      this.http.jsonp
      this.data = res
      console.log(this.data)
      this.location.back();

      // console.log(this.getData.arguments.
    })
  }

}
