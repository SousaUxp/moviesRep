import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDataComponent } from './movie-data/movie-data.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';

import { HttpClientModule } from '@angular/common/http';


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
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
