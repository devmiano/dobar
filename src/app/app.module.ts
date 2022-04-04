import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbrandComponent } from './components/navbrand/navbrand.component';
import { NavlinkComponent } from './components/navlink/navlink.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbrandComponent,
    NavlinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
