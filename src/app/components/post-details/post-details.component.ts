import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../models/Post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post:IPost

  constructor(private postService:PostService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(value => {
      this.postService.getPost(value.id).subscribe(value1 => this.post = value1)
    })
  }

  ngOnInit(): void {
  }

}
