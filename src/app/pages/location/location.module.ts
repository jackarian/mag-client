import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocationRoutingModule} from './location-routing.module';
import {LocationComponent} from './location.component';
import {LocationListComponent} from './location-list/location-list.component';
import {LocationDetailComponent} from './location-detail/location-detail.component';


@NgModule({
    declarations: [LocationComponent, LocationListComponent, LocationDetailComponent],
    imports: [
        CommonModule,
        LocationRoutingModule
    ]
})
export class LocationModule {}
