import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {

  
  residence: FormGroup = new FormGroup(
    {
        name: new FormControl("",[Validators.required,Validators.minLength(3)]),
        address: new FormGroup({
          street: new FormControl(""),
          city: new FormControl("")
        }),
        image:new FormControl("")
    }
  )
  
  add() {
    console.log(this.residence)
    console.log(this.residence.value)
  }

}
