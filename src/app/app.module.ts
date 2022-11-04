import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { MaterialModule } from './general/material/material.module';
import { NavbarComponent } from './general/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, NavbarComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
