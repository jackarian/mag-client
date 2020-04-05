import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {map} from 'rxjs/operators';

// App imports
import {Articolo} from '../articolo';
import {ArticoloPagination} from '../articolo-pagination';
import {ArticoliService} from '../_services/articoli.service';

@Component({
    selector: 'app-articoli-list',
    templateUrl: './articoli-list.component.html',
    styleUrls: ['./articoli-list.component.scss']
})
export class ArticoliListComponent implements OnInit {

    articoli: Articolo[];
    pagination: ArticoloPagination;
    isLoading: Boolean = false;
    current_page: number;

    constructor(private articoliService: ArticoliService, private route: ActivatedRoute) {}

    ngOnInit() {        
        this.getArticoli();
    }
    
    getArticoli(): void {
       
        this.isLoading = true;
        this.articoliService.getArticoli()
            .subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));

    }
    goToPage(page:number){
        this.articoliService.getArticoliAtPage(page).
            subscribe(response => this.handleResponse(response),
                error => this.handleError(error));
                
    }    
    protected handleResponse(response: ArticoloPagination) {
        this.isLoading = false;                
        this.pagination = response;               
        this.articoli = response.data;
        console.log(response)

    }
    protected handleError(error: any) {
        this.isLoading = false;
        console.error(error);
    }
}
