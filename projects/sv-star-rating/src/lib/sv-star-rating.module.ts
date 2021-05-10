import { NgModule } from '@angular/core';
import { SvStarRatingComponent } from './sv-star-rating.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    SvStarRatingComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    SvStarRatingComponent
  ]
})
export class SvStarRatingModule { }
