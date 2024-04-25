import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  constructor(private rs: ResidenceService,private router:Router) {}

  residence: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // address: new FormGroup({
    //   street: new FormControl(""),
    //   city: new FormControl("")
    // }),
    address: new FormControl(),
    image: new FormControl('', [Validators.required]),
  });

  add() {
    console.log(this.residence);
    console.log(this.residence.value);
    this.rs.addResidenceService(this.residence.value)
    this.router.navigate(['/residence']);
  }
}
