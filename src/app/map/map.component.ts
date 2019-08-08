import { Component, OnInit, Input } from '@angular/core';
import { ApiVenuesService } from '../api-venues.service';
import { HighlighterService } from '../highlighter.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  venuesToShow: Array<object>;

  constructor(private apiVenueService: ApiVenuesService) { }

  ngOnInit() {
    this.apiVenueService.filteredVenues.subscribe(venues => this.venuesToShow = venues)
  }

}
