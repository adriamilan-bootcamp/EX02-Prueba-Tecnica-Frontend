import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movies } from '../models/movies.model';
import { Observable } from 'rxjs';

const URL_API = "https://api.themoviedb.org/3/";
const API_KEY = "003c792ff4afec5e80a1bfdbe51437a3";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(page:string): Observable<Movies[]> {
    return this.http.get<Movies[]>(URL_API + "movie/popular?api_key=" + API_KEY + "&language=es-ES&page=" + page)
  }

  getMovie(id: any): Observable<any> {
    return this.http.get<Movies>(URL_API + "movie/" + id + "?api_key=" + API_KEY + "&language=es-ES")
  }

}
