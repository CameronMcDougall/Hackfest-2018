
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SearchFilterPipe} from './pipes/search-filter.pipe';
import { AgmCoreModule } from '@agm/core';
import {MatSelectModule,MatOptionModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SearchFilterPipe],
  imports: [
    MatSelectModule,
    MatOptionModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBvtefBfZIQCwJUiR6ZrWgxPfKxkxapeT8"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
