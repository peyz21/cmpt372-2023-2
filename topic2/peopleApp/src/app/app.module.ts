import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ColorsDirective } from './colors.directive';
import { CountPeoplePipe } from './count-people.pipe';
import { SearchPipe } from './search.pipe';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { PersonEditFormComponent } from './person-edit-form/person-edit-form.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent,
    ColorsDirective,
    CountPeoplePipe,
    SearchPipe,
    PersonAddFormComponent,
    PersonEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
