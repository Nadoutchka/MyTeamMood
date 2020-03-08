import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { USERS } from '../users';
import { User } from '../user';

@Component({
  selector: 'app-user-mood',
  templateUrl: './user-mood.component.html',
  styleUrls: ['./user-mood.component.scss']
})
export class UserMoodComponent implements OnInit {
  user : User;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const userId = +this.route.snapshot.paramMap.get('userId');
    for(let user of USERS)
    {
      if (user.id == userId)
      {
        this.user = user;
      }
    }
  }
}
