import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../models/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
private postsList = `https://jsonplaceholder.typicode.com/posts`

  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.postsList)
  }
  getPost(id:string):Observable<IPost>{
  return this.httpClient.get<IPost>(this.postsList + "/" + id)
  }
}
