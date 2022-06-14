import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
