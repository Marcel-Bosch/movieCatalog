import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/nowPlaying-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];
  constructor() { }
  mySwiper: Swiper;
  ngAfterViewInit(): void{
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true, 
    })
  }

  ngOnInit(): void {
    // console.log(this.movies);

  }

  slideNext() {
    this.mySwiper.slideNext();
  }

  slidePrev() {
    this.mySwiper.slidePrev();
  }
}
