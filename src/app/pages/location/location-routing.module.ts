import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/**
 * Componenti del modulo
 */
import {LocationListComponent} from './location-list/location-list.component';
import {LocationDetailComponent} from './location-detail/location-detail.component'
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [{
    path: 'location',
    children: [
        {
            path: '',
            component: LocationListComponent
        },
        {
            path: 'page/:page',
            component: LocationDetailComponent
        },
        {
            path:':id',
            component: LocationDetailComponent,
            canActivate:[AuthGuard]
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationRoutingModule {}
