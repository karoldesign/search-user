import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
