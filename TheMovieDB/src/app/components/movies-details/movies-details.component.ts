import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  editId: boolean = false;

  adminView: boolean = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router, private tokenStorageService: TokenStorageService) {

  }

  idParam: any = null;

  movie: any;

  ngOnInit(): void {

    this.idParam = this.route.snapshot.paramMap.get('id');

    this.moviesService.getMovie(this.idParam)
      .subscribe(
        data => {
          this.movie = data;
        },
        error => {
          console.log(error)
        }
      )
  }

}
