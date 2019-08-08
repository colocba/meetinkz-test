import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlighterService {

  coordinates: Coordinate = {
    latitude: 0,
    longitude: 0,
    name: ""
  }
  private coordinateSource = new BehaviorSubject<Coordinate>(this.coordinates)
  coords$ = this.coordinateSource.asObservable();

  constructor() { }

  passCoordinatesToOtherComponent(coords) {
    this.coordinateSource.next(coords);
  }
}

export interface Coordinate {
  latitude: number;
  longitude: number;
  name: string;
}
