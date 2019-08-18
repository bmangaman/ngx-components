import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabviewComponentModule } from '../../../ngx-components/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabviewComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
