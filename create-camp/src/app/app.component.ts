import { Component } from "@angular/core";
import { data } from "./properties";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
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
    console.log(data);
  }

  
  selectedOption: string;
  lat: number = -41.2440266;
  lng: number = 174.6214276;

  getSearchMatches(text: string) {
    console.log("ENTERED");
  }
}
