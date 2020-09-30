import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

import { Movie, NowPlaying } from '../interfaces/nowPlaying-response';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3/';
  private nowPlayingPage = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: 'aa584746bedb9fe6f4f79abb8b1a65e4',
      language: 'es-ES',
      page: this.nowPlayingPage.toString()
    }
  }

  getNowPlaying(): Observable<Movie[]> {

    if (this.loading) {
      return of([])
    }

    this.loading = true;

    return this.http.get<NowPlaying>(`${this.baseUrl}movie/now_playing`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.nowPlayingPage += 1;
        this.loading = false;
      })
    );
  }

  searchMovies(txt: string): Observable<Movie[]> {
    //https://api.themoviedb.org/3/search/movie
    const params = { ...this.params, page: '1', query: txt };
    return this.http.get<NowPlaying>(`${this.baseUrl}search/movie`, {
      params
    }).pipe(
      map(resp => resp.results)
    )
  }
  resetPlayingPage() {
    this.nowPlayingPage = 1;
  }

  getMovieDetail(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError(err => of([]))
    );
  }
}
