import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule,LOCALE_ID} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
// Application modules
import {HomeModule} from './pages/home/home.module';
import {NavComponent} from './layout/nav/nav.component';
import {AuthModule} from './pages/auth/auth.module';
import {PermessiModule} from './pages/permessi/permessi.module';
import {LocationModule} from './pages/location/location.module';

import {InstallazioneModule} from './pages/installazione/installazione.module';
import {HttpErrorHandler} from './shared/_services/http-handle-error.service';
import {AppHttpInterceptorService} from './shared/_services/http-interceptor.service';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';


import localeIt from '@angular/common/locales/it';
import {registerLocaleData} from '@angular/common';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



registerLocaleData(localeIt);



@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
    ],    
    imports: [
        BrowserModule,       
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        AuthModule,
        PermessiModule,
        LocationModule,
        InstallazioneModule,       
        NgbModule,
        NotificationModule,
        DialogsModule,
        BrowserAnimationsModule

    ],
    providers: [
        Title,
        HttpErrorHandler, {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptorService,
            multi: true
        },{ provide: LOCALE_ID, useValue: 'it' }]
    ,
    bootstrap: [AppComponent]
})
export class AppModule {}
