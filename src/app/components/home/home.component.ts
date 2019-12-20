import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'
import { UserInterface } from '../../interface/user.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listUser: UserInterface[];
  filter: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {this.listUser = data;});
  }

  onText(text: string) {
   this.filter=text;
  }



}
