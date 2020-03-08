import { Injectable } from '@angular/core';

import { USERS } from './users';
import { User } from './user';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
