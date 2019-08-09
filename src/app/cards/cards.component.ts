import { Component, OnInit } from '@angular/core';
import { ApiVenuesService } from '../api-venues.service';
import { finalize } from 'rxjs/operators';
import { MarkerInput } from '../map-marker/map-marker.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  currentVenues: MarkerInput[] = []
  venuesLoaded = false;
  sortByType: string = undefined;
  constructor(private venueApi: ApiVenuesService) { }

  ngOnInit() {
    // This function is listening on venues changes from db and displaying them on screen
    this.venueApi.filteredVenues
    .subscribe(
      venues => this.showData(venues)
    )
    // This function is listening on sort applied by client
    this.venueApi.typeSorting
    .subscribe(
      sortType => this.sortDataByType(sortType)
    )
  }

  // Show data when receiving updates form db
  private showData(venues) {
    this.currentVenues = venues
    if (this.currentVenues.length != 0) {
      this.venuesLoaded = true;
    }
    console.log(this.currentVenues.length, this.venuesLoaded)
    if (this.sortByType != undefined) {
      this.sortDataByType(this.sortByType);
    }
  }

  // Sort the data after receiving the sorting type from filter component
  private sortDataByType(sortType) {
    this.sortByType = sortType
    if (sortType == "price") {
      this.currentVenues.sort(
        (a,b) => {
          if (a.ratePerHour > b.ratePerHour) return 1
          else if (a.ratePerHour < b.ratePerHour) return -1
          else return 0
        }
      )
    } else {
      this.currentVenues.sort(
        (a,b) => {
          if (a.maxParticipants > b.maxParticipants) return 1
          else if (a.maxParticipants < b.maxParticipants) return -1
          else return 0
        }
      )
    }
  }

}
