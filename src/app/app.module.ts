import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductModule } from './product/product.module';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AppRoutingModule } from './app-routing.module';
import { FormApartementComponent } from './form-apartement/form-apartement.component';

@NgModule({ //Annotation / Decorator => TypeScript
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ResidencesComponent,
    FormResidenceComponent,
    NotFoundComponent,
    DetailsResidenceComponent,
    FormApartementComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
