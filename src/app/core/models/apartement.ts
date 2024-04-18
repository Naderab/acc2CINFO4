import { Residence } from './residence';
export class Apartment {
  id!: number;
  appartNum: number=0;
  floorNum!: number;
  surface!: number;
  terrace!: string;
  surfaceTerrace!: number;
  category!: string;
  description!: string;
  residence: Residence= new Residence();
}
