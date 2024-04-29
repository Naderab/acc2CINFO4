import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerService } from '../core/services/consumer.service';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  id!: number;
  r!: Residence;
  constructor(
    private rs: ResidenceService,
    private router: Router,
    private consumer: ConsumerService,
    private ar: ActivatedRoute
  ) {
    this.id = this.ar.snapshot.params['id'];
    if (this.id != undefined) {
      this.consumer.getResidenceById(this.id).subscribe({
        next: (data) => {
          this.residence.patchValue({
            name: data.name,
            address: data.address,
            image: data.image,
          });
          this.r = data;
        },
      });
    } 
  }

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
    //this.rs.addResidenceService(this.residence.value)

    this.id != undefined
      ? this.consumer.updateResidence(this.id, this.residence.value).subscribe({
          next: () => this.router.navigate(['/residence']),
        })
      : console.log(this.residence.value);
    this.consumer.addResidence(this.residence.value).subscribe({
      next: () => this.router.navigate(['/residence']),
      error: (e) => alert(e.message),
    });
  }
}
