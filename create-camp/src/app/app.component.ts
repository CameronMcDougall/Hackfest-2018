import { Property } from "./property-interface";
import { Component } from "@angular/core";
import { data } from "./properties";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  properties: Property[] = [];
  title: string = "app";

  cities: string[] = [
    "lowry bay",
    "seatoun",
    "pipitea",
    "te aro",
    "mirimar",
    "lyall bay"
  ];

  constructor() {
    //console.log(data);
    this.parseData();
  }

  results: string[] = [];
  search: string = "";
  lat: number = -41.2440266;
  lng: number = 174.6214276;

  getSearchMatches(text: string) {
    console.log("ENTERED");
  }

  parseData() {
    data.forEach(element => {
      const property: Property = {
        longitude: element.GeographicLocation.Longitude,
        latitude: element.GeographicLocation.Latitude,
        numBedrooms: element.Bedrooms,
        price: element.RentPerWeek,
        address: element.Address,
        suburb: element.Suburb
      };
      this.properties[this.properties.length] = property;
    });
  }
}
