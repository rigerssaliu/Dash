import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { DashboardService } from './services/dashboard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { HomeComponent } from './components/home/home.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { TimelinechartComponent } from './components/timelinechart/timelinechart.component';

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
    TimelinechartComponent
       

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule

     
    
     
  ],
  providers: [
    DashboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
