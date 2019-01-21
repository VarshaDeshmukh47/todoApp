import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PostService {

  url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  } 

  makeAPost(newpost){
    return this.http.post(this.url,newpost);
  }

  //updatePost
  updatePost(postId){
    let seen = {
      seen: true
    }

    let targetUrl = this.url+'/'+postId

    return this.http.patch(targetUrl,seen);
  } 

  //Delete post

  deletePost(postId){
      return this.http.delete(this.url+'/'+postId);
  }

   
}
