import { Component, Input } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css'],
})
export class ResidenceComponent {
  //This is a CHILD
  @Input() res!: Residence;
}
