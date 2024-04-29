import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResidencesComponent } from "./residences/residences.component";
import { FormResidenceComponent } from "./form-residence/form-residence.component";
import { DetailsResidenceComponent } from "./details-residence/details-residence.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { FormApartementComponent } from "./form-apartement/form-apartement.component";

const t: Routes = [
  {
    path: 'residence',
    children: [
      { path: '', component: ResidencesComponent },
      { path: 'test', component: FormResidenceComponent },
      { path: ':id', component: DetailsResidenceComponent },
    ],
  },
  { path: 'forma', component: FormApartementComponent },
  { path: 'form', component: FormResidenceComponent },
  { path: 'form/update/:id', component: FormResidenceComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(t)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{};