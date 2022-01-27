import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  http: HttpClient;
  comments: Comment[] = [];
  commentsUrl: string = "";

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getComments(unit_id:number): void {
    this.http.get<Comment[]>(this.commentsUrl + unit_id, {observe: 'response'}).subscribe();
  }
}
