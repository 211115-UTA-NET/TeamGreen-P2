import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentService: CommentService;
  seeComments: boolean = false;
  comments: Comment[] | null = [];
  comm: HttpResponse<Comment[]> | undefined;
  id: number = 0;

  @Output() review = new EventEmitter<string>();
  @Output() rating = new EventEmitter<string>();
  
  constructor(commentService: CommentService, private route: ActivatedRoute, private http: HttpClient) {
    this.commentService = commentService;
  }

  ngOnInit(): void {

  }

  getCommentsForUnit(unit_id: number): void {
    this.commentService.getComments(unit_id).subscribe(comments => {
      this.http.jsonp;
      this.comm = comments;
      this.comments = this.comm.body;
      if (this.comments != null) {
        console.log(this.comm);
      } else {
        console.log("comments returned null");
      }
    });  
  }

  showComments(): void {
    const id = Number(this.route.snapshot.paramMap.get('Unit_ID'));
    this.id = id;
    this.getCommentsForUnit(id);
    this.seeComments = true;
  }

  submitComment(info: string): void {
    console.log("1");
    this.commentService.submitComment(info, this.id);
  }

  

}
