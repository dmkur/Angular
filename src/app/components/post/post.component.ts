import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  postsL:IPost
  constructor() { }

  ngOnInit(): void {
  }

}
