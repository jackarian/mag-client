import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
/**
 * Componenti del modulo
 */
import {ArticoliListComponent} from './articoli-list/articoli-list.component';
import {ArticoliDetailComponent} from './articoli-detail/articoli-detail.component'
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [{
    path: 'articoli',
    children: [
        {
            path: '',
            component: ArticoliListComponent
        },
        {
            path: 'page/:page',
            component: ArticoliListComponent
        },
        {
            path:':id',
            component: ArticoliDetailComponent,
            canActivate:[AuthGuard]
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticoliRoutingModule {}
