import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person
  @Output() delete = new EventEmitter()

  constructor(private router: Router) { }

  getInstr(){
    return true
  }

  onDelete(evt:any,ind:string){
    console.log(evt)
    console.log(ind)
    evt["ind"] = ind
    this.delete.emit(evt)
  }

  onEdit(evt:any,ind:string){
    this.router.navigate(["/edit", ind])
  }

  ngOnInit(): void {
  }

}
