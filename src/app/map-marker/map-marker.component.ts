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
  private isClicked = false


  ngOnInit() {
    this.highligther.coords$.subscribe(coord => this.highlightThisCardIfNecesary(coord))
  }

  highlightThisCardIfNecesary(coord) {
    if (this.marker.lat === coord.latitude && this.marker.lon == coord.longitude && this.marker.name === coord.name) {
      this.isClicked = !this.isClicked;
    }
  }

  markerClicked(event) {
    // Scroll to marker.id
    const config: ScrollToConfigOptions = {
      target: this.marker.id,
      offset: -250
    };
    this._scrollToService.scrollTo(config);
    this.highligther.passCoordinatesToOtherComponent({
      latitude: event.latitude,
      longitude: event.longitude,
      name: this.marker.name
    })
  }

}

export interface MarkerInput {
  lat: number,
  lon: number,
  name: string,
  id: string
}
