import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

// App import
import {environment} from '../../../../environments/environment';
import {Permesso} from '../permesso';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';
import { DialogRef} from '@progress/kendo-angular-dialog';
@Injectable({
    providedIn: 'root'
})
export class PermessiService {

    private readonly apiUrl = environment.apiUrl;
    private permessoUrl = this.apiUrl + '/tipiaccessi';
    private handleError: HandleError;

    constructor(private http: HttpClient,httpErrorHandler:  HttpErrorHandler, private dialog:DialogRef) {
         //this.handleError  =  httpErrorHandler.createHandleError('PermessiSerice',dialog);
    }
    
    
    
    getPermessi(): Observable<Permesso[]> {
        return this.http.get<Permesso[]>(this.permessoUrl)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** GET bike detail from bike-detail endpoint */
    getPermessiDetail(id: number): Observable<Permesso> {
        return this.http.get<Permesso>(this.permessoUrl + `/${id}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** POST bike to bikes endpoint */
    addPermesso(permesso: Permesso): Observable<Permesso> {
        return this.http.post<Permesso>(this.permessoUrl, permesso)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** PUT bike to bikes endpoint */
    updatePermesso(bike: Permesso, id: number): Observable<Permesso> {
        return this.http.put<Permesso>(this.permessoUrl + `/${id}`, bike)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    /** DELETE bike bike endpoint */
    deletePermesso(id: number): Observable<Permesso[]> {
        return this.http.delete<Permesso[]>(this.permessoUrl + `/${id}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

}
