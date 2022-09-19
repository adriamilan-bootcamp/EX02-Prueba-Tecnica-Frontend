import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/service/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {

  editId: boolean = false;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private router: Router, private tokenStorageService: TokenStorageService) {

  }

  idParam: any = null;

  serie: any;

  ngOnInit(): void {

    this.idParam = this.route.snapshot.paramMap.get('id');

    this.moviesService.getSerie(this.idParam)
      .subscribe(
        data => {
          this.serie = data;
        },
        error => {
          console.log(error)
        }
      )
  }

}
