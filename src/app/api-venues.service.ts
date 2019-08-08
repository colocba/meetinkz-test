import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MarkerInput } from './map-marker/map-marker.component';

@Injectable({
  providedIn: 'root'
})
export class ApiVenuesService {

  private apiUrl = "https://api.meetinkz.com/api/venues/filter?lat=51.5073509&lon=-0.12775829999998223&duratio nType=1&country=0&BookingDate=&ratePerHour=500&GuestNumber=&locationName=London %2C%20UK&page=1&pagesize=100";
  private initialLongitude = 0.1265981000000238;
  private initialLatitude = 51.5083405;
  
  private originalVenuesRaw = [] // This variable contains r original array
  private filteredVenuesRaw = [] // This variable contains r array filtered
  private initialTypeSorting: string = undefined;
  private venuesSource = new BehaviorSubject<MarkerInput[]>(this.filteredVenuesRaw);
  private sortSource = new BehaviorSubject<string>(this.initialTypeSorting)
  filteredVenues = this.venuesSource.asObservable(); // This is the observable of the filter source
  typeSorting = this.sortSource.asObservable(); // This is the the observable of the sort source

  constructor(private http: HttpClient) {
    this.http.get<any>(this.apiUrl).subscribe(venues => this.initializeOriginalSource(venues.r))
  }

  // Initializing original data and saving it for later filters
  private initializeOriginalSource(venues) {
    this.venuesSource.next(venues)
    this.originalVenuesRaw = venues
  }

  // Function that the user calls for making a filter from the filter parameters received in the filter object
  filterData(filterObject) {
    this.filterOriginalSource(this.originalVenuesRaw.filter(obj => this.fillFilterConditions(obj,filterObject)))
  }

  // Updating the listener
  sortData(typeSorting) {
    this.sortSource.next(typeSorting);
  }

  // Filtering from original data
  private filterOriginalSource(venues) {
    this.venuesSource.next(venues)
  }

  // Function for filtering each obj from the array returning true if fullfills the filter conditions
  private fillFilterConditions(obj,filterObject) {
    console.log(obj, filterObject);
    if (filterObject.name == undefined && filterObject.radius != undefined) {
      return this.distance(obj.lat, obj.lon, this.initialLatitude, this.initialLongitude) < filterObject.radius;
    } else if (filterObject.name != undefined && filterObject.radius == undefined) {
      return obj.name.includes(filterObject.name)   
    } else if (filterObject.name == undefined && filterObject.radius == undefined) {
      return true;
    } else {
      return obj.name.includes(filterObject.name) 
      && (this.distance(obj.lat, obj.lon, this.initialLatitude, this.initialLongitude) < filterObject.radius)
    }
    
  }

  // Function that calculates the distance between two points in km
  private distance(lat1,lon1,lat2,lon2) {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2-lat1) * Math.PI / 180;
    var dLon = (lon2-lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    if (d>1) return Math.round(d);
    else if (d<=1) return Math.round(d*1000);
    return d;
  }

}
