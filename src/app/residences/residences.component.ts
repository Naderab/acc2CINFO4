import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/apartement';
import { ResidenceService } from '../core/services/residence.service';
import { ConsumerService } from '../core/services/consumer.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  // I m the PARENT
listApartments: Apartment[] = []
  constructor(private rs: ResidenceService,private consumer:ConsumerService) {
    //this.listResidences = this.rs.listResidencesService;
    this.consumer.getApartments().subscribe({
      next:(data)=>this.listApartments = data
    })

    this.consumer.getResidences().subscribe({
      next: (data) => this.listResidences = data,
      error : (e) => alert(e.message)
    })
    console.log(this.rs.getSameValueOf(this.listApartments,'category','S+1'))
  this.listApartments= [];
  }
  searchText!: string;
  listResidences: Residence[] = [
  ];
  
  listApartementsFiltred: Apartment[] = [];
  listApartementsSearch: Apartment[] = [];

  showApartementByResidence(id: number) {
    this.listApartementsFiltred = this.listApartments.filter(
      (o) => o.residence.id == id
    );
    this.listApartementsSearch = this.listApartementsFiltred
  }

  searchSurface() {
    this.listApartementsSearch = this.rs.getSameValueOf(
      this.listApartementsFiltred,'surface',Number(this.searchText)
    );
  }

  delete(id: number) {
    this.consumer.deleteResidence(id).subscribe({
      next : () => this.listResidences = this.listResidences.filter((r)=>r.id != id)
    })
  }

  deleteA(id: number) {
    this.consumer.deleteApartment(id).subscribe({
      next:()=>this.listApartments = this.listApartments.filter((a)=>a.id != id)
    })
  }
}
