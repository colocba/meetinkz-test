import { Component, OnInit } from '@angular/core';
import { ApiVenuesService } from '../api-venues.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  currentVenues: object[];
  private loadCompleted: boolean = false;
  constructor(private venueApi: ApiVenuesService) { }

  ngOnInit() {
    // This function is listening on venues changes from db and displaying them on screen
    this.venueApi.filteredVenues.subscribe(venues => this.currentVenues = venues, (error) => console.log(error), () => this.loadCompleted = true)
  }

}
