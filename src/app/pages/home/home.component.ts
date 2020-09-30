import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if(pos>max){
      //load next page
      if(this.moviesService.loading){return;}
      
      this.moviesService.getNowPlaying().subscribe(movies =>{
        this.movies.push(...movies);
      });      
    }
    
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    //Get Now Playing
    this.moviesService.getNowPlaying()
    .subscribe(movies=>{
      this.movies=movies;
      this.moviesSlideShow=movies;
    })
  }

  ngOnDestroy(): void {
    this.moviesService.resetPlayingPage();
  }
}
