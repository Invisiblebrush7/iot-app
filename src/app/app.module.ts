import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { MaterialModule } from './general/material/material.module';
import { NavbarComponent } from './general/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
