import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Input() registeredUsers = 0;
  @Input() UsersArray: User[];

  @Output() eraseUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}

  deleteUser(deletedUser: User) {
    this.eraseUser.emit(deletedUser);
  }

}
