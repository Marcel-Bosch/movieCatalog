import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,map } from 'rxjs/operators';

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

    if(this.loading){
      return of([])
    }

    this.loading = true;
    
    return this.http.get<NowPlaying>(`${this.baseUrl}movie/now_playing`, {
      params: this.params
    }).pipe(
      map((resp)=>resp.results),
      tap(() => {
        this.nowPlayingPage += 1;
        this.loading = false;
      })
    );
  }

}
