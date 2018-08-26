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
  displayProperties: Property[] = [];
  title: string = "app";
  maxPrice: number = 0;
  minPrice: number = 100000;
  displayMinPrice:number = 0;
  displayMaxPrice:number = 500;
  numOfRooms: number[]= [1,2,3,4,5]
  amountOfRooms: number = 1;
  price: number;
  selectedSuburb:string = "All";
  cities: string[] = [];

  changeMinSlider(value){
    this.displayMinPrice = value;
   this.findProperties();

  }
  changeMaxSlider(value){

    this.displayMaxPrice = value;
    this.findProperties();
  }
  changeRooms(value){
    
    this.amountOfRooms = value;
    this.findProperties();
  }
  print(){
    console.log(this.selectedSuburb);
  }

  findProperties(){
    this.displayProperties = []
    this.properties.forEach(element => {
      
      let price: number = Number(element.price.substring(1,element.price.length));
     

      console.log("Element price: "+price );
     console.log("min price: "+this.displayMinPrice );
      console.log("max price: "+ this.displayMaxPrice);
      console.log("max price from init: "+ this.maxPrice);
      if(this.selectedSuburb == "All"&& element.numBedrooms >= this.amountOfRooms
      && price <= this.displayMaxPrice && price >= this.displayMinPrice){
        this.displayProperties.push(element);
      }
     else if(element.suburb == this.selectedSuburb 
        && element.numBedrooms >= this.amountOfRooms
        && price <= this.displayMaxPrice && price >= this.displayMinPrice
        ){
            this.displayProperties.push(element);
        }
      
    });
  }
  changedSuburb(){
    this.findProperties();
  }
  constructor() {
    //console.log(data);
    this.parseData();
    this.getCities();
    this.displayProperties = this.properties;
  }

  getCities(){
    this.cities.push("All");
    this.properties.forEach(
      element=>
      {
        if(!this.cities.includes(element.suburb)){
          this.cities.push(element.suburb);
        }
      }
    );
   
  }
  selectedOption: string;
  lat: number = -41.2440266;
  lng: number = 174.6214276;
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
