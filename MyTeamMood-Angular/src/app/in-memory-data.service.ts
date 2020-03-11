import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
    createDb() {
      const users = [
        {
          id: 1,
          firstname: 'Jonathan',
          lastname: 'Thomas',
          email: 'Thomas.Jonathan@soprasteria.com',
        },
        {
            id: 2,
            firstname: 'Jeremy',
            lastname: 'Brigaud',
            email: 'Brigaud.Jeremy@soprasteria.com',
        },
        {
            id: 3,
            firstname: 'Corentin',
            lastname: 'Jayer',
            email: 'Jayer.Corentin@soprasteria.com',
        },
        {
            id: 4,
            firstname: 'Thomas',
            lastname: 'Souq',
            email: 'Souq.Thomas@soprasteria.com',
        },
        {
            id: 5,
            firstname: 'Yasmin',
            lastname: 'Martinez',
            email: 'Martinez.Yasmin@soprasteria.com',
        },
        {
            id: 6,
            firstname: 'Adele',
            lastname: 'Morgan',
            email: 'Morgan.Adele@soprasteria.com',
        }
      ];
      return {users};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (1).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.

    genId(users: User[]): number {
      return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    }
}
