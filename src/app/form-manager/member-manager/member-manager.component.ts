import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-member-manager',
  templateUrl: './member-manager.component.html',
  styleUrls: ['./member-manager.component.scss']
})
export class MemberManagerComponent implements OnInit {

  User: User;
  UsersArray: User[] = [];
  registeredUsers = 0;

  constructor() {}

  ngOnInit() {}

  mostrar(evento) {
    this.User = evento;
    this.UsersArray.push(this.User);
    this.registeredUsers = this.UsersArray.length;
  }

  erase(user: User) {
    const index = this.UsersArray.indexOf(user);
    this.UsersArray.splice(index, 1);
    this.registeredUsers = this.UsersArray.length;
  }

}
