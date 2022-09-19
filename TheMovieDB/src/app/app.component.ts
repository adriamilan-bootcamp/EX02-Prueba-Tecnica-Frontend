import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from '../app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickMortyCrud';

  public loginForm: FormGroup;

  isLoggedIn: boolean = false;
  adminView: boolean = false;

  user:any;
  token:any;

  constructor(private authService: AuthService, private fb: FormBuilder, private tokenStorageService: TokenStorageService, public router: Router) { 
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();
      this.token = this.tokenStorageService.getToken();
    }
    if(this.tokenStorageService.getRoles()?.toString() == "ADMIN_TOKEN") {
      this.adminView = true;
    } else {
      this.adminView = false;
    }
  }

  onSubmit() {
    var username = this.loginForm.get('username')?.value
    var password = this.loginForm.get('password')?.value

    this.authService.login(username, password).subscribe(
      data => {
        this.isLoggedIn = true;
        this.tokenStorageService.saveToken(data["token"])
        this.tokenStorageService.saveUser(username)
        this.tokenStorageService.setRoles()
      }, error => {
        console.log(error)
        this.isLoggedIn = false;
      }
    )
  }

  logout() {
    this.tokenStorageService.signOut();
    this.adminView = false;
    this.isLoggedIn = false;
    window.location.reload();
  }
}
