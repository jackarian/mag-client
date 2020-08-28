import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Installazione } from '../../installazione/installazione';
import { Location } from '../location';
import { LocationService } from '../_services/location.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {
    DialogService,
    DialogRef,
    DialogCloseResult
} from '@progress/kendo-angular-dialog';

@Component({
    selector: 'app-location-detail',
    templateUrl: './location-detail.component.html',
    styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

    @Input() node: Installazione;
    @Input() location: Location;
    //stato del task 0=ATTESA,1=AVVIATO,2=CONCLUSO,3=ANNULLATO,4=SOSPESO,5=ELIMINATA/NON ATTIVA
    stati = [
        {value: 0, text: 'ATTESA'},
        {value: 1, text: 'ATTIVA'},
        {value: 2, text: 'CONCLUSO'},
        {value: 3, text: 'ANNULLATO'},
        {value: 4, text: 'ELIMINATA/NON ATTIVA'},
        
    ];
    
    @ViewChild("dialogDetails", { read: ViewContainerRef, static: true })
    public containerRef: ViewContainerRef;
    
    
    constructor(private service: LocationService, 
                private notifer: NotificationService,
                private dialogService: DialogService) { }

    
    
    
    
    ngOnInit() {
        this.service.setupDialog(this.containerRef);
    }
    ngOnChanges(changes: SimpleChanges) {
        
        
        this.impostaForm(this.location);
        
        
    }
    impostaForm(location:Location){
        
    }
    statoChange(stato:any){
        console.log(stato);
        this.location.stato = stato.value;
        console.log(this.location);
    }
    submitForm(value: any) {

        if(this.location.id !=null){
        this.service.aggiorna(this.location).subscribe(
            response => this.handleResponse(response),
            error => this.handleError(error));
        }else{
           this.service.aggiungi(this.location).subscribe(
            response => this.handleResponse(response),
            error => this.handleError(error)); 
        }
    }

    handleResponse(response: any) {
        this.notifer.show({
            content: 'Aggiornamento avvenuto con successo.',
            animation: { type: 'fade', duration: 500 },
            position: { horizontal: 'center', vertical: 'bottom' },
            type: { style: 'info', icon: true },
            closable: true
        });
    }
    handleError(error: any) {
        if (error instanceof HttpErrorResponse) {
            if (error.status == 500) {
                this.dialogService.open({
                    appendTo: this.containerRef,
                    title: 'Errore Server',
                    content: error.message,
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
}

