import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimationModule } from '@angular/platform-browser/animations';
import { browser } from 'protractor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavigationMenuComponent } from './templates/navigation-menu/navigation-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MealCardComponent } from './templates/meal-card/meal-card.component';
import { LoginFormComponent } from './templates/login-form/login-form.component';

//import { AnimationModule } from "@angular/platform-browser/animations"
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HomePageComponent,
    DashboardPageComponent,
    LoginPageComponent,
    MealCardComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
