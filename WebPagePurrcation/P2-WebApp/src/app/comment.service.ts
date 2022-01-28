import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  http: HttpClient;
  comments: Comment[] = [];
  getCommentsUrl: string = 'https://purrcationapi.azurewebsites.net/GetCommentById/';
  submitCommentUrl: string = '';

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getComments(unit_id:number): Observable<HttpResponse<Comment[]>> {
    console.log("unit id " + unit_id);
    return this.http.get<Comment[]>(this.getCommentsUrl + unit_id, {observe: 'response'});

  }

  submitComment(review:string, rating:number, id:number) : void {
    this.http.post<any>(this.submitCommentUrl, {Review: review, Rating: rating, Id: id});
  }
}
