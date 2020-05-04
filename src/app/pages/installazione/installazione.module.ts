import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { InstallazioneRoutingModule } from './installazione-routing.module';
import { InstallazioneComponent } from './installazione.component';
import { InstallazioneListComponent} from './installazione-list/installazione-list.component';
import { InstallazioneDetailComponent } from './installazione-detail/installazione-detail.component';


@NgModule({
    declarations: [InstallazioneComponent, InstallazioneListComponent, InstallazioneDetailComponent],
  imports: [
    CommonModule,
    InstallazioneRoutingModule,
    EasyUIModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InstallazioneModule { }
