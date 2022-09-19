import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesListComponent } from './components/series-list/series-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesListComponent},
  {path: 'movie/:id', component: MoviesDetailsComponent},
  {path: 'series', component: SeriesListComponent},
  {path: 'serie/:id', component: SeriesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
