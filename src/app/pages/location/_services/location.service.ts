import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {endpoints} from '../../../../environments/endpoint';
import {Location} from '../location';
import {LocationPagination} from '../location-pagination';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

    private readonly apiUrl = environment.apiUrl;
    private articoliUrl = this.apiUrl + '/articoli';
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('ArticoliSerice');
        
    }
    getLocations(): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(this.articoliUrl)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    getLocationAtPage(page:number): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(this.articoliUrl+`?page=${page}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** GET bike detail from bike-detail endpoint */
    getLocationDetail(id: string): Observable<LocationPagination> {
        return this.http.get<LocationPagination>(this.articoliUrl + `/${id}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    

    
}
