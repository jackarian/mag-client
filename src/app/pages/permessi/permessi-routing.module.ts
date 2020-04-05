import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PermessiListComponent} from './permessi-list/permessi-list.component';
import {PermessiDetailComponent} from './permessi-detail/permessi-detail.component';
import { AuthGuard } from '../auth/_guards/auth.guard';

const routes: Routes = [
    {
        path: 'permessi',
        children: [
            {
                path: '',
                component: PermessiListComponent
            },
            {
                path: ':id',
                component: PermessiDetailComponent,
                canActivate: [AuthGuard]
            }


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PermessiRoutingModule {}
