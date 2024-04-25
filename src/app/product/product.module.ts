import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceService } from '../core/services/residence.service';

const t1: Routes = [
  {path:'product',component:ProductsListComponent}
]

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  exports:[ProductsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(t1)
  ],
 // providers:[ResidenceService]
})
export class ProductModule { }
