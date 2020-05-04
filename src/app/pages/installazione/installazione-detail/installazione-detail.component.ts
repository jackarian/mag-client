import {Component, OnInit, Input} from '@angular/core';
import {Installazione} from '../installazione';
@Component({
    selector: 'app-installazione-detail',
    templateUrl: './installazione-detail.component.html',
    styleUrls: ['./installazione-detail.component.scss']
})
export class InstallazioneDetailComponent implements OnInit {

    @Input() node: Installazione;
    
    constructor() {}

    ngOnInit() {
        
    }

}
