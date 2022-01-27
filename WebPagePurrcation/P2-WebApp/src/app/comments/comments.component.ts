import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(commentService: CommentService) { }

  getCommentsForUnit(unit_id: number): void {
    //this.commentService.getComments(unit_id);  
  }

  ngOnInit(): void {

  }

  

}
