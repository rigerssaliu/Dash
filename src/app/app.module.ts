import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { DashboardService } from './services/dashboard.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { HomeComponent } from './components/home/home.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { TimelinechartComponent } from './components/timelinechart/timelinechart.component';
import { LinearGaugeComponent } from './components/linear-gauge/linear-gauge.component';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { TesterComponent } from './components/tester/tester.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'bar', component: LinechartComponent},
  { path:'line', component: BarchartComponent},
  { path: 'pie', component: PiechartComponent},
  { path: 'timeLine', component: TimelinechartComponent}

];  

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LinechartComponent,
    NavbarComponent,
    BarchartComponent,
    HomeComponent,
    PiechartComponent,
    TimelinechartComponent,
    LinearGaugeComponent,
    TesterComponent,
    MapComponent,
    FooterComponent,
    
       

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    LeafletModule

     
    
     
  ],
  providers: [
    DashboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
