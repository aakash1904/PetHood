import { HomeroutingModule } from './shared-modules/home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationTopComponent } from './components/navigation-top/navigation-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationTopComponent
  ],
  imports: [
    BrowserModule,
    HomeroutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
