import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'purrcation';
  data2: any = {};
  public data:any = []

  constructor(private http: HttpClient) {}
  
  
  postData(info: string){
    
    const url ='https://localhost:7112/AddComments/?Comments='+info;
    this.http.get(url).subscribe((res)=>{
      this.http.jsonp
      this.data = res
      console.log(this.data)

      // console.log(this.getData.arguments.
    })
  }

 // ngOnInit(): void {
 //   this.postData(name: string)
  //}

 }