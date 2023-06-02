import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = [
    {
      name: "bobby",
      added_on: (new Date().getTime()),
      instructor: true
    },
    {
      name: "steve",
      added_on: (new Date().getTime()),
      instructor: false
    },
    {
      name: "sara",
      added_on: (new Date().getTime()),
      instructor: true
    },
    {
      name: "john",
      added_on: (new Date().getTime()),
      instructor: false
    },
    {
      name: "johnson",
      added_on: (new Date().getTime()),
      instructor: true
    },
    {
      name: "jojo",
      added_on: (new Date().getTime()),
      instructor: false
    }
  ]
  constructor() { }

  get(){
    return this.people
  }

  add(person){
    person.added_on = (new Date()).getTime()
    this.people.push(person)
    console.log(this.people)
  }

  delete(del_person:string){
    this.people = this.people.filter(p=>p.name!==del_person)
    console.log(this.people)
    return this.people
  }

  // edit
}
