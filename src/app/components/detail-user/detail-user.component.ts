import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service'
import { UserPost } from '../../post/user.post'
import { UserAlbums } from '../../albums/user.albums'
@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

  contentPost: UserPost[];
  contentAlbum: UserAlbums[];
  post: Array<Object>;


  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const userId = this.activeRoute.snapshot.params.id;
    this.userService.getUserDetailPost(userId).subscribe(data => {this.contentPost = data; console.log(data)});
    this.userService.getUserDetailAlbums(userId).subscribe(data => { this.contentAlbum = data});
  }

}
