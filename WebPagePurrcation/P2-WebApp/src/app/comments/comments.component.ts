import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentService: CommentService;
  seeComments: boolean = false;
  comments: Comment[] = [];
  
  constructor(commentService: CommentService) {
    this.commentService = commentService;
   }

  ngOnInit(): void {

  }

  getCommentsForUnit(unit_id: number): void {
    this.commentService.getComments(unit_id);  
  }

  showComments(/**unit_id: number*/) {
    //this.getCommentsForUnit(unit_id);
    this.seeComments = true;
  }

  

}
