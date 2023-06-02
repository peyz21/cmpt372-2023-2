import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-person-edit-form',
  templateUrl: './person-edit-form.component.html',
  styleUrls: ['./person-edit-form.component.css']
})
export class PersonEditFormComponent implements OnInit {
  name
  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.ActivatedRoute.snapshot.paramMap.get('name')
  }

}
