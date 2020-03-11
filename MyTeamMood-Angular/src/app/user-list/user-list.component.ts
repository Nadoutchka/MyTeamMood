import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
