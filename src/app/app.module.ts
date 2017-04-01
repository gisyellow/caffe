import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MapComponent }  from './map/map.component';

import { MapService }    from './map/map.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MapComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ MapService ]
})
export class AppModule { }
