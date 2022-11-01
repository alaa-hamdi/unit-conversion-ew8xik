import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description.component';
import { ConversionComponent } from './conversion.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DescriptionComponent, ConversionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
