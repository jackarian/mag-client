import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticoliRoutingModule } from './articoli-routing.module';
import { ArticoliComponent } from './articoli.component';
import { ArticoliListComponent } from './articoli-list/articoli-list.component';
import { ArticoliDetailComponent } from './articoli-detail/articoli-detail.component';


@NgModule({
  declarations: [ArticoliComponent, ArticoliListComponent, ArticoliDetailComponent],
  imports: [
    CommonModule,
    ArticoliRoutingModule
  ]
})
export class ArticoliModule { }
