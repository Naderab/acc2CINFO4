import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residence } from '../models/residence';
import { Apartment } from '../models/apartement';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  baseUrl: string = 'http://localhost:3000/';
  apiUrlResidence: string = this.baseUrl + 'residence/';
  apiUrlApartment: string = this.baseUrl + 'apartement/';

  constructor(private http: HttpClient) {}

  getResidences() {
    return this.http.get<Residence[]>(this.apiUrlResidence);
  }

  getResidenceById(id:number) {
    return this.http.get<Residence>(this.apiUrlResidence+id);
  }

  addResidence(body: Residence) {
    return this.http.post(this.apiUrlResidence, body);
  }

  updateResidence(id: number, body: Residence) {
    return this.http.put(this.apiUrlResidence + id, body);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrlResidence + id);
  }

  // Apartment Consumer

  getApartments() {
    return this.http.get(this.apiUrlApartment);
  }

  addApartment(body: Apartment) {
    return this.http.post(this.apiUrlApartment, body);
  }

  updateApartment(id: number, body: Apartment) {
    return this.http.put(this.apiUrlApartment + id, body);
  }

  deleteApartment(id: number) {
    return this.http.delete(this.apiUrlApartment + id);
  }
}
