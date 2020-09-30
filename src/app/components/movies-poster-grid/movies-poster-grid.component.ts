import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Movie } from 'src/app/interfaces/nowPlaying-response';


@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
  onMovieClick(movie:Movie){
    this.router.navigate(['/movie',movie.id]);
  }
}
