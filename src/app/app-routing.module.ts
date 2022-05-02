import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';

const routes: Routes = [{
  path:'',
  component:MovieListComponent
},
{
  path:'top',
  component:TopMoviesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
