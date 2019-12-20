import { Component, EventEmitter, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @Output() text = new EventEmitter<string>();

  onSearchChange(text: string){
    this.text.emit(text);
  }

  constructor() { }

  ngOnInit() {
  }

}
