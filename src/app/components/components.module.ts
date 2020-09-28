import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';



@NgModule({
  declarations: [NavbarComponent, SlideShowComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent
  ]
})
export class ComponentsModule { }
