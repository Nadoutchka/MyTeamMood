import { Injectable } from '@angular/core';

import { User } from './user';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';  // URL to web api
  // à tester avec l'URL : 'my-json-server.typicode.com/SinanDaroukh/demo/users' -> il faut parser le json (cad ce qu'on get de l'url)
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the users
    this.messageService.add(`UserService: fetched users`);
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
