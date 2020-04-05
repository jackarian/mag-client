import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {Articolo} from '../articolo';
import {ArticoloPagination} from '../articolo-pagination';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';

@Injectable({
    providedIn: 'root'
})
export class ArticoliService {

    private readonly apiUrl = environment.apiUrl;
    private articoliUrl = this.apiUrl + '/articoli';
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('ArticoliSerice');
        
    }
    getArticoli(): Observable<ArticoloPagination> {
        return this.http.get<ArticoloPagination>(this.articoliUrl)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    getArticoliAtPage(page:number): Observable<ArticoloPagination> {
        return this.http.get<ArticoloPagination>(this.articoliUrl+`?page=${page}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** GET bike detail from bike-detail endpoint */
    getArticoloDetail(id: string): Observable<Articolo> {
        return this.http.get<Articolo>(this.articoliUrl + `/${id}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    

    
}
