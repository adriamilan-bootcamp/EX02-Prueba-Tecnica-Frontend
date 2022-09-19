import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from '../app/_helpers/auth-interceptor';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesDetailsComponent } from './components/series-details/series-details.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { AboutComponent } from './components/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesDetailsComponent,
    HomeComponent,
    SeriesDetailsComponent,
    SeriesListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
