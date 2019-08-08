import { Component, OnInit, Input } from '@angular/core';
import { HighlighterService } from '../highlighter.service';
import { MarkerInput } from '../map-marker/map-marker.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private highligther: HighlighterService) { }

  @Input() venueObject: MarkerInput;
  isClicked = false;
  shadowedCard = {
    'border': '1px solid var(--app-color)',
    '-webkit-box-shadow': '0px 0px 10px 8px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '0px 0px 10px 8px rgba(0,0,0,0.75)',
    'box-shadow': '0px 0px 10px 8px rgba(0,0,0,0.75)'
  }
  normalCard = {
    '-webkit-box-shadow': '-2px 2px 5px 0px rgba(0,0,0,0.42)',
    '-moz-box-shadow': '-2px 2px 5px 0px rgba(0,0,0,0.42)',
    'box-shadow': '-2px 2px 5px 0px rgba(0,0,0,0.42)'
  }

  ngOnInit() {
    this.highligther.coords$.subscribe(coord => this.highlightThisCardIfNecesary(coord))
  }

  highlightThisCardIfNecesary(coord) {
    if (this.venueObject.lat === coord.latitude && this.venueObject.lon == coord.longitude && this.venueObject.name == coord.name) {
      this.isClicked = !this.isClicked;
    }
  }

  cardClicked(card) {
    this.highligther.passCoordinatesToOtherComponent({
      latitude: card.venueObject.lat,
      longitude: card.venueObject.lon,
      name: card.venueObject.name
    })
  }

}
