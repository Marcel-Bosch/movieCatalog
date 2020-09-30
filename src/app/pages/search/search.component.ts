import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @Input() movies: Movie[] = [];

  public searchTxt: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchTxt = params.txt;
      //Call service
      this.moviesService.searchMovies(params.txt).subscribe(movies => {
        this.movies = movies;
        console.log(movies[0].title);

      })
    })
  }

}
