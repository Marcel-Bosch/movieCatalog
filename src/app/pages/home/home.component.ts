import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    //Get Now Playing
    this.moviesService.getNowPlaying()
    .subscribe(ans=>{
      this.movies=ans.results;
    })
  }

}
