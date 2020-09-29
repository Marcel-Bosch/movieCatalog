import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  searchMovie(txt: string) {
    txt = txt.trim();
    if (txt.length === 0) {
      return
    }
    this.router.navigate(['/search', txt])
  }
  ngOnInit(): void {
  }

}
