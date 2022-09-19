import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = "https://api.themoviedb.org/3/";

const API_KEY = "003c792ff4afec5e80a1bfdbe51437a3";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user:any = null;

  login (username: string, password: string): Observable<any> {

    let request_token: any;

    this.http.get(AUTH_API + "authentication/token/new?api_key=" + API_KEY).subscribe(
      data => {
        console.log(data)
      }, error => {
        console.log(error)
      }
    )

    this.user = null;

    this.user = {
      "username": username,
      "password": password
    }

    return this.http.post(AUTH_API + 'login', JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json'}});
  }

  findRole(username:string): Observable<any> {
    return this.http.get(AUTH_API + "users/" + username)
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'users', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }
}
