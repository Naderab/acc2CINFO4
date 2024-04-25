import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent {

  residence!: Residence;
  constructor(private ar: ActivatedRoute,private rs:ResidenceService) {
    console.log(this.ar.snapshot.params['id'])
    this.residence = this.rs.getResidenceById(this.ar.snapshot.params['id'])
  }
}
