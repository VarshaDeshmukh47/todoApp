import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css'],
  providers:[PostService]
})
export class UserPostComponent implements OnInit {

  posts;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getData()
    .subscribe(
      data => {        
        this.posts = data;
        console.log(this.posts);
      }
    )
  }
  
  createPost(ptitle:HTMLInputElement,pbody:HTMLTextAreaElement){

    let newpost = {
      title: ptitle.value,
      body: pbody.value
    }

    ptitle.value = '';
    pbody.value = '';

    this.postService.makeAPost(newpost)
      .subscribe(data => {
        console.log(data)
        this.posts.splice(0,0,newpost);
      })
  }

  //update post
  editPost(post){
      this.postService.updatePost(post.id)
      .subscribe(data => {
        console.log(data)
      })
  }
  
  //trash post
  trashPost(post){
    this.postService.deletePost(post.id)
    .subscribe(data => {
        console.log(data);

        let postI = this.posts.indexOf(post);

        this.posts.splice(postI,1);
    })
  }


}
