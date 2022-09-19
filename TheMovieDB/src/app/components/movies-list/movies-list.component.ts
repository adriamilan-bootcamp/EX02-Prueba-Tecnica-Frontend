import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  movies: any = null;

  page: number = 1;

  ngOnInit(): void {
    this.instancePage()
  }

  instancePage() {
    this.moviesService.getPopularMovies(this.page.toString())
    .subscribe(result => {
      this.movies = result
    })
  }

  previousPage() {
    if (this.page > 0) {
      this.page--; 
    }
    this.instancePage()
  }

  nextPage() {
    this.page++
    this.instancePage()
  }

  setPage(page: any) {
    this.page = page
    this.instancePage()
  }

}
