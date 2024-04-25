import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartement',
  templateUrl: './form-apartement.component.html',
  styleUrls: ['./form-apartement.component.css'],
})
export class FormApartementComponent {
  // '[a-zA-Z0-9-_.]+.[a-zA-Z0-9-_.]+@[a-zA-Z]+.[a-zA-Z]{2,4}';
  apartment: FormGroup = new FormGroup({
    apartNum: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    floorNum: new FormControl(0, [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    surface: new FormControl(0, [Validators.required]),
    terrace: new FormControl('', [Validators.required]),
    surfaceTerrace: new FormControl(0),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
}
