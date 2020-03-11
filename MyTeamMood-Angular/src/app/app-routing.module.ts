import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component'
import { UserMoodComponent } from './user-mood/user-mood.component'

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users/:userId', component: UserMoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
