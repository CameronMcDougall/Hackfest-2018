import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {MatSelectModule,MatOptionModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SearchFilterPipe} from './pipes/search-filter.pipe';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchFilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtefBfZIQCwJUiR6ZrWgxPfKxkxapeT8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
