import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// App imports
import { environment } from '../../../../environments/environment';
import {endpoints} from '../../../../environments/endpoint';
import {UserDetails} from '../user-details';
import {User} from '../user';
import {JwtResponse} from '../jwt-response'
// Setup headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: UserDetails;
  private readonly apiUrl = environment.apiUrl;
  private readonly endpoint = endpoints;
  private registerUrl = this.apiUrl + '/auth/register';
  private loginUrl = this.apiUrl + '/auth/login';

  constructor(
    private http: HttpClient,
    private router: Router) {}

    onRegister(user: User): Observable<UserDetails> {

    const request = JSON.stringify(
      { name: user.name, email: user.email, password: user.password }
    );

        return this.http.post(this.endpoint.register, request, httpOptions)
      .pipe(
          map((response: UserDetails) => {
          // Receive jwt token in the response
              const token: string = response.token;
          // If we have a token, proceed
          if (token) {
            this.setToken(token);
            this.getUser().subscribe();
          }
          return response;
        }),
        catchError(error => this.handleError(error))
      );
  }

  onLogin(user: User): Observable<JwtResponse> {

    const request = JSON.stringify(
      { username: user.email, password: user.password }
    );

      return this.http.post(this.endpoint.login, request, httpOptions)
      .pipe(
        map((response: JwtResponse) => {
          // Receive jwt token in the response
            const token: string = response.token;
          // If we have a token, proceed
          if (token) {
            this.setToken(token);
              this.getUser().subscribe();
          }
          return response;
        }),
        catchError(error => this.handleError(error))
      );
  }

  onLogout(): Observable<User> {
      return this.http.post(this.endpoint.logout, httpOptions).pipe(
      tap(
        () => {
          localStorage.removeItem('token');
          this.router.navigate(['/']);
        }
      )
    );
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getUser(): Observable<UserDetails> {
      return this.http.get(this.endpoint.user).pipe(
      tap(
          (user: UserDetails) => {
          this.currentUser = user;
        }
      )
    );
  }

  isAuthenticated(): boolean {
    // get the token
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend error.
        return throwError(error);
    }
    // return a custom error message
    return throwError('Ohps something wrong happen here; please try again later.');
  }
}
