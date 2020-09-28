import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [HomeComponent, SearchComponent, MovieComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
