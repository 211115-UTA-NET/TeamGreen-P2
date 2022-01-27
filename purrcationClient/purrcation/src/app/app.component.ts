import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'purrcation';
  public data:any = []
  constructor(private http: HttpClient) {
    
  }
  
  
  
  getData(){
    const url ='https://purrcationapi.azurewebsites.net/getallunits'
    this.http.get(url).subscribe((res)=>{
      this.http.jsonp
      this.data = res
      console.log(this.data)

      // console.log(this.getData.arguments.
    })
  }

  ngOnInit(): void {
    this.getData()
  }

 }