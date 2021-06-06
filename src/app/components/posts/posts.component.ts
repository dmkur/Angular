import { Component, OnInit } from '@angular/core';
import {IPost} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsP: IPost[] = []

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      this.postsP = value;
      console.log(value)
    })
  }

}
