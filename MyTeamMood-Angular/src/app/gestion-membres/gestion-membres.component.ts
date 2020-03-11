import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-gestion-membres',
  templateUrl: './gestion-membres.component.html',
  styleUrls: ['./gestion-membres.component.scss']
})
export class GestionMembresComponent implements OnInit {
  users: User[];
  selectedUser: User;

  @Input() user: User;

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

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
