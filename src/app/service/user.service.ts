import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserInterface } from '../interface/user.interface'
import { UserPost } from '../post/user.post'
import { UserComments } from '../comments/user.comments'
import { UserAlbums } from '../albums/user.albums'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http
      .get<UserInterface[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getUserDetailPost(id): Observable<UserPost[]> {
    return this.http
      .get<UserPost[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }

  getUserDetailComments(id): Observable<UserComments[]> {
    return this.http
      .get<UserComments[]>(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }

  getUserDetailAlbums(id): Observable<UserAlbums[]> {
    return this.http
      .get<UserAlbums[]>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

}
