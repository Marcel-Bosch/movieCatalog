import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlaying } from '../interfaces/nowPlaying-response';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getNowPlaying(): Observable<NowPlaying> {
    return this.http.get<NowPlaying>('https://api.themoviedb.org/3/movie/now_playing?api_key=aa584746bedb9fe6f4f79abb8b1a65e4&language=es-ES&page=1')
  }

}
