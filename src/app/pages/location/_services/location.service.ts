import {Injectable,ViewContainerRef} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {endpoints} from '../../../../environments/endpoint';
import {Location} from '../location';
import {LocationPagination} from '../location-pagination';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
    providedIn: 'root'
})
export class LocationService {
    
    private handleError: HandleError;
    private refDialog :ViewContainerRef;
    
    constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {}
    
    aggiorna(location:Location): Observable<{}>{
        return this.
            http.
            put<any>(endpoints.location_update + `/${location.id}`,location);
    }
    setupDialog(ref:ViewContainerRef){
        this.refDialog = ref;
        this.handleError = this.httpErrorHandler.createHandleError('LocationService',ref);
    }
    getLocations(page_size:number,offset:number): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(endpoints.location+`/${page_size}/${offset}`);
    }
    getLocationAtPage(page:number): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(endpoints.location+`/page=${page}`);
    }
    
    getLocationDetail(id: string): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(endpoints.location_datails + `/${id}`);
    }
    
    aggiungi(location:Location){
        return this.http.post<Location>(endpoints.location_create,location,httpOptions);
    }
    
   }