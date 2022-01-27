import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentService: CommentService;
  seeComments: boolean = false;
  comments: Comment[] = [];
  id: number = 0;
  
  constructor(commentService: CommentService, private route: ActivatedRoute, private location: Location) {
    this.commentService = commentService;
  }

  ngOnInit(): void {

  }

  getCommentsForUnit(unit_id: number): void {
    this.commentService.getComments(unit_id);  
  }

  showComments() {
    const id = Number(this.route.snapshot.paramMap.get('Unit_ID'));
    this.id = id;
    this.getCommentsForUnit(id);
    this.seeComments = true;
  }

  

}
