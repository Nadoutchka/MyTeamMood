import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-mood',
  templateUrl: './user-mood.component.html',
  styleUrls: ['./user-mood.component.scss']
})
export class UserMoodComponent implements OnInit {
  user : User;
  users: User[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const userId = +this.route.snapshot.paramMap.get('userId');
    this.userService.getUser(userId).subscribe(user => this.user = user);
  }
}
