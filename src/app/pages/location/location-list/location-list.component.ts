import {Component, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {map} from 'rxjs/operators';

// App imports
import {Location} from '../location';
import {LocationPagination} from '../location-pagination';
import {LocationService} from '../_services/location.service';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {

    locations: Location[];
    pagination: LocationPagination;
    isLoading: Boolean = false;
    current_page: number;

    constructor(private locationService: LocationService, private route: ActivatedRoute) {}

    ngOnInit() {        
        this.getArticoli();
    }
    
    getArticoli(): void {
       
        this.isLoading = true;
        this.locationService.getLocations()
            .subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));

    }
    goToPage(page:number){
        this.locationService.getLocationAtPage(page).
            subscribe(response => this.handleResponse(response),
                error => this.handleError(error));
                
    }    
    protected handleResponse(response: LocationPagination) {
        this.isLoading = false;                
        this.pagination = response;               
        this.locations = response.data;
        console.log(response)

    }
    protected handleError(error: any) {
        this.isLoading = false;
        console.error(error);
    }
}
