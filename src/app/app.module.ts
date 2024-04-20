import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductModule } from './product/product.module';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({ //Annotation / Decorator => TypeScript
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ResidencesComponent,
    FormResidenceComponent,
    NotFoundComponent,
    DetailsResidenceComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
