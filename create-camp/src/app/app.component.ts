import { Component } from '@angular/core';
import { data } from './properties'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';

  cities: string[] = ['lowry bay', 'seatoun', 'pipitea', 'te aro', 'mirimar','lyall bay'] ;

  constructor( ) {
    console.log(data)
  }


 
  
  selected: string = "";
    
}
