import { Component, OnInit } from '@angular/core';

import { USERS } from '../users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = USERS;

  constructor() { }

  ngOnInit(): void {
  }
}
