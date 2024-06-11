import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  error;
  posts;
  isLoading = false;
  post = { title: '', content: '', author: '' };
  constructor(private postService : PostService) { }
  ngOnInit() {
    this.fetchAllPosts();
  }
  fetchAllPosts(){
    this.isLoading = true;
    this.postService.getAllPosts().subscribe(data =>{
      this.isLoading = false;
      this.posts = data;
      console.log(this.posts);
    },
    error => {
      if(error.status == '404'){
        this.error = "Loi khong tim thay";
      }
      else{
        console.log(error);
        this.error = "Loi server " + error.message;
      }
    }
    );
  }

  createPost(postData){
    this.postService.createPost(postData).subscribe(data =>{
      console.log("Created Post Success");
      this.fetchAllPosts();
    });
  }
  deletePost(postId) {
    console.log("postId:", postId); 
    if (confirm("Bạn có chắc chắn muốn xóa bài viết này?")) {
      this.postService.deletePost(postId).subscribe(
        () => {
          console.log("Deleted Post Success");
          this.fetchAllPosts(); 
        },
        error => {
          console.error("Error deleting post:", error);

        }
      );
    }
  }
  
}
