import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VenueCardsComponent } from './venue-cards/venue-cards.component';
import { MapComponent } from './map/map.component';
import { FilteringElementsComponent } from './filtering-elements/filtering-elements.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { ToCurrencyPipe } from './to-currency.pipe';
import { MapMarkerComponent } from './map-marker/map-marker.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VenueCardsComponent,
    MapComponent,
    FilteringElementsComponent,
    CardsComponent,
    CardComponent,
    ToCurrencyPipe,
    MapMarkerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBP2nV-KMXUD2v6m-nP9HGTDS0AFnuMrD4'
    }),
    ScrollToModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
