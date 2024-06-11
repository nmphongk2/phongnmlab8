import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import { IProduct } from './entities/Product';
import { AuthService } from './auth.service';
@Injectable()
export class PostService {
  urlPost = environment.url + "/posts";

  constructor(private httpService: HttpClient, private authService: AuthService) { }
  storePost(postData: IProduct){
    this.httpService.post(this.urlPost,postData).subscribe(p=>{
    console.log(p);
    })
    }
  getAllPosts(){
    return this.httpService.get(this.urlPost,{headers: new HttpHeaders().set('x-access-token',
       this.authService.getToken())
      });
  }

  createPost(dataPost){
    return this.httpService.post(this.urlPost,dataPost,{headers: new HttpHeaders().set('x-access-token',
      this.authService.getToken())
     });
 }
  deletePost(postId) {
    const url = `${this.urlPost}/${postId}`;
    return this.httpService.delete(url,{headers: new HttpHeaders().set('x-access-token',
      this.authService.getToken())
     });
 }
 
}