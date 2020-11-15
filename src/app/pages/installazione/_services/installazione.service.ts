import {Injectable, ViewContainerRef} from '@angular/core';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpErrorHandler, HandleError} from '../../../shared/_services/http-handle-error.service';
import {endpoints} from '../../../../environments/endpoint';
import {InstallazionePagination} from '../installazione-pagination';
import {Installazione} from '../installazione';


@Injectable({
  providedIn: 'root'
})
export class InstallazioneService {


    private handleError: HandleError;
    private refDialog: ViewContainerRef;
    constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {


    }

    setupDialog(ref: ViewContainerRef) {
        this.refDialog = ref;
        this.handleError = this.httpErrorHandler.createHandleError('InstallationService', ref);
    }


    // tslint:disable-next-line: variable-name
    getInstallazioni(page_size: number, offset: number): Observable<InstallazionePagination> {
        console.log('Call get installazioni');
        return this.http.get<InstallazionePagination>
            (endpoints.installation + `/${page_size}/${offset}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }
    aggiorna(installazione: Installazione): Observable<{}> {
        // console.log("Aggiorna installazione");
        return this.
            http.
            put<any>(endpoints.installation_update + `/${installazione.id}`, installazione)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }

    cancella(installazione: Installazione) {
        return this.
            http.
            delete(endpoints.installation_remove + `/${installazione.id}`)
            .pipe(
                catchError(error => this.handleError(error))
            );
    }



}
