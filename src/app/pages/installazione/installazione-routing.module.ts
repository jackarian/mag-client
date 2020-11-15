import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthGuard } from '../auth/_guards/auth.guard';
import {InstallazioneListComponent} from './installazione-list/installazione-list.component'

const routes: Routes = [{
    path: 'installazione',
    children: [
        {
            path: '',
            component: InstallazioneListComponent,
            canActivate: [AuthGuard]
        },
        {
            path: ':page/:offset',
            component: InstallazioneListComponent,
            canActivate: [AuthGuard]
        }]

}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstallazioneRoutingModule {}
