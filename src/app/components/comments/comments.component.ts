import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private  activeRoute: ActivatedRoute) {
    this.activeRoute.data.subscribe(value => {
      console.log(value)
    })
  }

  ngOnInit(): void {
  }

}
