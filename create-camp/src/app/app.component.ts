import { Component } from '@angular/core';
import { data } from './properties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  constructor() {
    console.log(data)
  }
  cities: string[] = ['Lowry Bay', 'Seatoun', 'Pipitea', 'Te Aro', 'Mirimar','Lyall Bay'] ;
  results: string[] =[]; 
  getSearchMatches(text: string){
    console.log("ENTERED");
    
    var contains =[];
    this.cities.forEach(element => {
      if(this.cities.includes(text)){
          contains.push(element);
      }
    });
    return contains;
  }
}
