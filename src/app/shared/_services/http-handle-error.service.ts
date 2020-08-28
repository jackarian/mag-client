import { Injectable,NgZone,ViewContainerRef } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  DialogService,
  DialogRef,
  DialogCloseResult
} from '@progress/kendo-angular-dialog';

/** HandleError Type  */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {

  constructor(private dialogService:DialogService) {
      
  }

  /** Pass the service name to map errors */
  createHandleError = (serviceName = '',dialogView:ViewContainerRef ) => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName,dialogView,operation, result)

  handleError<T> (serviceName = '',dialogView: ViewContainerRef, operation = 'operation', result = {} as T) {

        
    return (response: HttpErrorResponse): Observable<T> => {
      // Optionally send the error to a third part error logging service
      //console.error(response);
      
     
      // Show a simple alert if error
      
       this.dialogService.open({
                    appendTo: dialogView,
                    title: 'Error',
                    content: response.message,                    
                    width: 450,
                    height: 200,
                    minWidth: 250
                });         
      return of( result );
    };

  }
}
