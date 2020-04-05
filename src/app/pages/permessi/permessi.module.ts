import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PermessiRoutingModule } from './permessi-routing.module';
import { PermessiComponent } from './permessi.component';
import { PermessiDetailComponent } from './permessi-detail/permessi-detail.component';
import { PermessiListComponent } from './permessi-list/permessi-list.component';
import { PermessiSearchPipe } from './_pipes/permessi-search.pipe';


@NgModule({
  declarations: [PermessiComponent, PermessiDetailComponent, PermessiListComponent, PermessiSearchPipe],
  imports: [
    CommonModule,
    PermessiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PermessiModule { }
