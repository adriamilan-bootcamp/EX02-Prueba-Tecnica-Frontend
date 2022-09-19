import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private authService: AuthService, public router: Router) { }

  signOut(): void {
    window.sessionStorage.clear();
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.removeItem(ROLES_KEY);
  }
  

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.setRoles();
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

    public setRoles() {
      
      const user = this.getUser();

      this.authService.findRole(user).subscribe(
        data => {
          console.log(data)
          window.sessionStorage.removeItem(ROLES_KEY);
          window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(data["role"]));
        },
        err => {
          console.log(err)
          console.log("Couldn't find role information")
        }
      )
    }

    public getRoles() {
      return window.sessionStorage.getItem(ROLES_KEY);
    }

}