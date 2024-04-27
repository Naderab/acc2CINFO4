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
listApartments: Apartment[] = []
  constructor(private rs: ResidenceService,private consumer:ConsumerService) {
    //this.listResidences = this.rs.listResidencesService;
    this.consumer.getResidences().subscribe({
      next: (data) => this.listResidences = data,
      error : (e) => alert(e.message)
    })
    console.log(this.rs.getSameValueOf(this.listApartments,'category','S+1'))
  this.listApartments= [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
  ];
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
}
