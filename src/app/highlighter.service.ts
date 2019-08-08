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

  // Function for updating the coordinate source so the other component can be updated
  passCoordinatesToOtherComponent(coords) {
    this.coordinateSource.next(coords);
  }
}

// For compilation error purposes
export interface Coordinate {
  latitude: number;
  longitude: number;
  name: string;
}
