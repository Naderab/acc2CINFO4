import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductModule } from './product/product.module';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';

@NgModule({ //Annotation / Decorator => TypeScript
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ResidencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule
  ],
  providers: [], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
