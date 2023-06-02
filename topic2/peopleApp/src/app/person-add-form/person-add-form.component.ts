import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
import { PeopleService } from '../people.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent implements OnInit {

  form: FormGroup

  constructor(private ps: PeopleService, private router: Router) { 
    let formControls = {
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        this.forbiddenNamesValidator
      ]),
      instructor: new FormControl(false)
    }

    this.form = new FormGroup(formControls, {validators: [this.instructorValidator]})
  }

  forbiddenNamesValidator(control: FormControl){
    var bad_words = ['stupid', 'freaking', 'hell', 'idiot']
    if (bad_words.includes(control.value.trim())){
      return { name_error: "Your name connect be " + control.value } // invalid
    }
    else {
      return null // pass
    }
  }

  instructorValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const name = control.get("name")
    const instructor = control.get("instructor")
    const valid_instr_names = ['bobby', 'john', 'sara']
    return (valid_instr_names.includes(name.value) && instructor.value) || !instructor.value? 
           null : { form_error: true}

  }

  ngOnInit(): void {
  }

  onSubmit(values){
    console.log(values)
    // add this person!!
    this.ps.add(values)

    // navigation back to root
    this.router.navigate(["/"])
  }

}
