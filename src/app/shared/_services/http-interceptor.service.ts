import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
// App import
import {AuthService} from '../../pages/auth/_services/auth.service';

@Injectable()
export class AppHttpInterceptorService implements
    HttpInterceptor {

    constructor(public auth: AuthService, private router:
        Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
       
       
        const authToken = this.auth.getToken();
       
        if (authToken) {
            // Clone the request to add the new header.
             
            const authReq = req.clone(
                {
                    headers: req.headers.set('Authorization', `Bearer ${authToken}`)
                }
           );          

            // send the newly created request
            return next.handle(authReq).pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {                        
                        console.log('TAP function',              event);
                    }
                }, (err: any) => {
                    
                    console.log('Interceptor');
                    console.log(err);
                    
                    if (err instanceof
                        HttpErrorResponse) {
                        if (err.status === 401) {

                            this.auth.onLogout();                            
                            this.router.navigate(['/']);
                            
                        }else if(err.status === 0){
                            
                        }
                    }
                })
            );
        } else {
            console.log('interceptor without changes');
            return  next.handle(req);
        }
    }
}