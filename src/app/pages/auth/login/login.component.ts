import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {
    DialogService,
    DialogRef,
    DialogCloseResult
} from '@progress/kendo-angular-dialog';
// App imports
import { AuthService } from '../_services/auth.service';
import { User } from '../user';
import { HttpErrorHandler, HandleError } from '../../../shared/_services/http-handle-error.service';

import { Form } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user: User = new User();
    error: any;
    returnUrl: string;
    private handleError: HandleError;


    @ViewChild("dialog", { read: ViewContainerRef, static: true })
    public containerRef: ViewContainerRef;


    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute, private dialogService: DialogService) {

    }

    ngOnInit() {
        //  Set the return url
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit(loginForm): void {

        this.authService.onLogin(this.user).subscribe(
            (response) => {
                this.router.navigate([this.returnUrl]);
            },
            (error) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        this.dialogService.open({
                            appendTo: this.containerRef,
                            title: 'Accesso Negato',
                            content: 'Login o password errati',
                            width: 450,
                            height: 200,
                            minWidth: 250
                        });
                    }
                    else if (error.status == 0) {

                        this.dialogService.open({
                            appendTo: this.containerRef,
                            title: 'Errore Irreversibile',
                            content: 'Servizio non raggiungibile',
                            width: 450,
                            height: 200,
                            minWidth: 250
                        });
                    } else {
                        this.dialogService.open({
                            appendTo: this.containerRef,
                            title: 'Accesso Irreversibile',
                            content: 'Errore inaspettato. Contattare lo sviluppatore',
                            width: 450,
                            height: 200,
                            minWidth: 250
                        });
                    }
                } else {
                           this.dialogService.open({
                            appendTo: this.containerRef,
                            title: 'Accesso Irreversibile',
                            content: 'Errore inaspettato. Contattare lo sviluppatore',
                            width: 450,
                            height: 200,
                            minWidth: 250
                        });
                }
            }
        );
        // Clear form fields
        //loginForm.reset();
    }

}
