import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';
import {environment} from '../../../../environments/environment';
import {endpoints} from '../../../../environments/endpoint';
import {InstallazionePagination} from '../installazione-pagination';
import {Installazione} from '../installazione';

@Injectable({
  providedIn: 'root'
})
export class InstallazioneService {

  
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('InstallationSerice');
        
    }
    
    getInstallazioni(page_size:number,offset:number): Observable<InstallazionePagination> {
        console.log('Call get installazioni');
        return this.http.get<InstallazionePagination>
            (endpoints.installation + `/${page_size}/${offset}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    
    
    
}
