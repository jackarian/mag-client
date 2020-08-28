import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { InstallazioneModule } from '../installazione/installazione.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LocationComponent, LocationListComponent, LocationDetailComponent],
    imports: [
        CommonModule,
        LocationRoutingModule,
        EasyUIModule,
        FormsModule,
        ReactiveFormsModule,
        InstallazioneModule
    ],
    exports: [LocationDetailComponent, LocationListComponent]
})
export class LocationModule { }
