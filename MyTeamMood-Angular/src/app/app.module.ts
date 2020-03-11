import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMoodComponent } from './user-mood/user-mood.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';

import { HttpClientModule }    from '@angular/common/http';

// Pour la fausse API :
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UserListComponent,
    UserMoodComponent,
    GestionMembresComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserListComponent },
      { path: 'users/:userId', component: UserMoodComponent },
      { path: 'gestion_membres', component: GestionMembresComponent },
    ]),
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
