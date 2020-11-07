import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';

// App imports
import { Location } from '../location';
import { LocationTree } from '../location-tree';
import { LocationNode } from '../location-node';
import { LocationPagination } from '../location-pagination';
import { LocationService } from '../_services/location.service';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit, AfterViewInit {


    @ViewChild("dialog", { read: ViewContainerRef, static: true })
    public containerRef: ViewContainerRef;

    locations: Location[];
    pagination: LocationPagination;
    isLoading: Boolean = true;
    current_page: number;
    selectedNode: Location;
    selection: any = null;
    locationTree: LocationTree[];
    tmp:Location;

    constructor(private locationService: LocationService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.isLoading = true;
    }
    ngAfterViewInit() {
        this.locationService.setupDialog(this.containerRef);
        this.getLocations();

    }
    
    getLocations(): void {

        this.isLoading = true;
        this.locationService.getLocations(20, 1)
            .subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));

    }
    goToPage(page: number) {
        this.locationService.getLocations(20, page).
            subscribe(response => this.handleResponse(response),
                error => this.handleError(error));

    }
    protected handleResponse(response: LocationPagination) {


        this.pagination = response;
        this.locations = response.data;
        if (this.pagination.totalRows > 0) {
            console.log('Loading location tree');
            this.locationTree = [new LocationTree(0, 'Locations', this.locations)];
        }
        this.isLoading = false;

    }
    protected handleError(error: any) {
        this.isLoading = false;
        console.error(error);
    }

    onSelectionChange(node: LocationNode) {
        console.log(node);
        this.selectedNode = node.value;
    }
    
    addLocation(){
         
         this.tmp  = new Location();
         this.tmp.creationDate = new Date();
         this.tmp.lastUpdate = new Date();
         this.tmp.stato = 0;
         this.selectedNode = new Location();
    }
}
