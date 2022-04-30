import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDataComponent } from './movie-data/movie-data.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovieListComponent,
    MovieDataComponent,
    TopMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
