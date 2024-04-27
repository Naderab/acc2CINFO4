import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  constructor() {}
  listResidencesService: Residence[] = [
    {
      id: 1,
      name: 'El fel Service',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpg',
    },
  ];


  


  addResidenceService(r:Residence) {
    this.listResidencesService.push(r);
  }

  getResidenceById(id: number) {
    return this.listResidencesService.filter((r)=>r.id == id)[0]
  }

  getSameValueOf(list: any[], criteria: string, value: any) {
    return list.filter((e)=>e[criteria] == value)
  }
}
