import { Component, OnInit } from '@angular/core';
import { ApiVenuesService } from '../api-venues.service';

@Component({
  selector: 'app-filtering-elements',
  templateUrl: './filtering-elements.component.html',
  styleUrls: ['./filtering-elements.component.css']
})
export class FilteringElementsComponent implements OnInit {

  constructor(private venueApi: ApiVenuesService) { }

  toggleMoreFilters = false;
  radiusOptions = [1,2,5,10,25];
  radiusValueSelected: string;
  nameFilter: string;
  countryFilter: string;
  cityFilter: string;

  ngOnInit() {
  }

  applyFilters() {
    this.venueApi.filterData({
      name: this.nameFilter,
      radius: this.radiusValueSelected,
      country: this.countryFilter,
      city: this.cityFilter
    })
  }

  toggleFilterButton() {
    this.toggleMoreFilters = !this.toggleMoreFilters;
  }

}
