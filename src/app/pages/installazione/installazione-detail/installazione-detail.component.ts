import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {Installazione} from '../installazione';
import {InstallazioneService} from '../_services/installazione.service';
import localeIt from '@angular/common/locales/it';
import { formatDate } from '@angular/common';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'app-installazione-detail',
    templateUrl: './installazione-detail.component.html',
    styleUrls: ['./installazione-detail.component.scss']
})
export class InstallazioneDetailComponent implements OnInit,OnChanges {

    @Input() node: Installazione;
    
    constructor(private service: InstallazioneService,private notifer:NotificationService) {}
    private inizioLavori:Date;
    private fineLavori:Date;
    ngOnInit() {
        
    }
    ngOnChanges(changes: SimpleChanges) {
        
        
        this.aggiornaDate(this.node);
        
        
    }
    aggiornaDate(node:Installazione){
        
       if(node){       
       if(node.dataInizioLavori)
        this.inizioLavori = new Date(node.dataInizioLavori.toString());
        if(node.dataFineLavori)
        this.fineLavori =  new Date(node.dataFineLavori.toString());
       }
    }
    
    submitForm(value: any) {
       
        this.service.aggiorna(this.node).subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));
    }
    onDataInizioLavoriChange(date:Date){
        console.log(date)
        this.node.dataInizioLavori = formatDate(date,'yyyy-MM-dd','it');
    }
    onDataFineLavoriChange(date:Date){
        console.log(date)
        this.node.dataFineLavori = formatDate(date,'yyyy-MM-dd','it');
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
        console.log('Errore'); 
        console.error(error);
    }

}
