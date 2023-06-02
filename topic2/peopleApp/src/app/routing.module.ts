import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { PersonEditFormComponent } from './person-edit-form/person-edit-form.component';
import { PeopleListComponent } from './people-list/people-list.component';

const appRoutes:Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'add', component: PersonAddFormComponent },
  { path: 'edit/:name', component: PersonEditFormComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
