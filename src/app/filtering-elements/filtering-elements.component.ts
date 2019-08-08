import { Component, OnInit } from '@angular/core';
import { ApiVenuesService } from '../api-venues.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-filtering-elements',
  templateUrl: './filtering-elements.component.html',
  styleUrls: ['./filtering-elements.component.css']
})
export class FilteringElementsComponent implements OnInit {

  constructor(private venueApi: ApiVenuesService) { }

  radiusOptions = [1,2,5,10,25];
  radiusValueSelected: string;
  nameFilter: string;
  countryFilter: string;
  cityFilter: string;
  showSorts = false;
  lastSortOptionChoosen: string = ""

  ngOnInit() {
  }

  // When the filters are choosen, this function will make a filter object and send it to the rest of the components to filter they view
  applyFilters() {
    this.venueApi.filterData({
      name: this.nameFilter,
      radius: this.radiusValueSelected,
      country: this.countryFilter,
      city: this.cityFilter
    })
  }

  // If sorted type has been selected, we need to inform which type has been selected to the other components
  sortSelected(choice) {
    const optionChosen = choice.value
    if (optionChosen != this.lastSortOptionChoosen) { // For not making a same kind of sort as before
      this.venueApi.sortData(optionChosen)
      this.lastSortOptionChoosen = optionChosen
    }
  }

  toggleSorts() {
    this.showSorts = !this.showSorts;
  }

}
