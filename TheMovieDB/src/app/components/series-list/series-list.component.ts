import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service'

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  series: any = null;

  page: number = 1;

  ngOnInit(): void {
    this.instancePage()
  }

  instancePage() {
    this.moviesService.getPopularSeries(this.page.toString())
    .subscribe(result => {
      this.series = result
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
