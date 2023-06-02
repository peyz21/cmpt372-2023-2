import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:any[]
  query: string = ""

  constructor(private ps: PeopleService) {
    
   }


   onPersonDelete(evt){
     console.log(`parent comp: person ${evt["ind"]} has been deleted`)
     // find the person evt["ind"] and delete him or her from people
     const del_person = evt["ind"]
     
     this.people = this.ps.delete(del_person)
   }
  ngOnInit(): void {
    this.people = this.ps.get() 
  }

}
