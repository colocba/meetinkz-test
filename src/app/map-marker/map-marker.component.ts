import { Component, OnInit, Input } from '@angular/core';
import { HighlighterService } from '../highlighter.service';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-map-marker',
  templateUrl: './map-marker.component.html',
  styleUrls: ['./map-marker.component.css']
})
export class MapMarkerComponent implements OnInit {

  constructor(private highligther: HighlighterService, private _scrollToService: ScrollToService) { }
  @Input() marker: MarkerInput;
  iconUrl = "./assets/smallIcon.png"
  isClicked = false


  ngOnInit() {
    this.highligther.coords$.subscribe(coord => this.highlightThisMarkerIfNecesary(coord))
  }

  // We will make a bounce effect if this coord has been choosen on the cards component
  highlightThisMarkerIfNecesary(coord) {
    if (this.marker.lat === coord.latitude && this.marker.lon == coord.longitude && this.marker.name === coord.name) {
      this.isClicked = !this.isClicked;
    }
  }

  // If this marker has been clicked, we have to inform the cards component so it can be highlighted
  markerClicked(event) {
    const config: ScrollToConfigOptions = {
      target: this.marker.id,
      offset: -300
    };
    this._scrollToService.scrollTo(config);
    this.highligther.passCoordinatesToOtherComponent({
      latitude: event.latitude,
      longitude: event.longitude,
      name: this.marker.name
    })
  }

}

// Interface for compilation error purposes
export interface MarkerInput {
  lat: number,
  lon: number,
  name: string,
  id: string,
  currency: string,
  ratePerHour: number,
  maxParticipants: number,
  city: string,
  countryFullName: string,
  mainPhotoUrl: string
}
