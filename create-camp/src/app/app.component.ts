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
  maxPrice: number = 0;
  minPrice: number = 100000;

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

  
  selectedOption: string;
  lat: number = -41.2440266;
  lng: number = 174.6214276;

  getSearchMatches(text: string) {
    console.log("ENTERED");
  }

  parseData() {
    data.forEach(element => {
      if (element.RentPerWeek <= this.minPrice) {
        this.minPrice = element.RentPerWeek;
      } else if (element.RentPerWeek >= this.maxPrice) {
        this.maxPrice = element.RentPerWeek;
      }

      const property: Property = {
        longitude: element.GeographicLocation.Longitude,
        latitude: element.GeographicLocation.Latitude,
        numBedrooms: element.Bedrooms,
        price: "$" + String(element.RentPerWeek),
        address: element.Address,
        suburb: element.Suburb
      };
      this.properties[this.properties.length] = property;
    });
  }
}
