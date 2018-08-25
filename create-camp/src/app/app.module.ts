import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SearchFilterPipe} from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
