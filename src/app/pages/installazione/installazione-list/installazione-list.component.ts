import {Component, OnInit,AfterViewInit,ViewChild, ViewContainerRef} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {InstallazioneService} from '../_services/installazione.service';
import {Installazione} from '../installazione';
import {InstallazioneNode} from '../installazione-node';
import {InstallazionePagination} from '../installazione-pagination';
import {InstallazioneTree} from '../installazione-tree';
@Component({
    selector: 'app-installazione-list',
    templateUrl: './installazione-list.component.html',
    styleUrls: ['./installazione-list.component.scss']
})
export class InstallazioneListComponent implements OnInit,AfterViewInit {
    

    @ViewChild("dialog", { read: ViewContainerRef ,static:true})
    public containerRef: ViewContainerRef;
    
    installazioni: Installazione[];
    installazioneTree:InstallazioneTree[];
    pagination: InstallazionePagination;
    isLoading: Boolean = true;
    current_page: number;
    selectedNode:Installazione;
    selection: any = null;
    
    constructor(private activeRoute: ActivatedRoute,
        private router: Router,
        private service: InstallazioneService) {
        
       
        }

    ngAfterViewInit(): void {
         this.service.setupDialog(this.containerRef);
         this.service.
                getInstallazioni(20,1)
                .subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));
    }
    ngOnInit() {
         console.log('Init installazione-list-component');
                this.isLoading = true;   
                
              
    }
    
     goToPage(page:number){
       this.isLoading = true;   
       this.service.
           getInstallazioni(20, page)
                .subscribe(
                response => this.handleResponse(response),
                error => this.handleError(error));
                
    }
    onSelectionChange(node: InstallazioneNode){
        //console.log(node);
        this.selectedNode = node.value;
    }
    
    protected handleResponse(response: InstallazionePagination) {
        console.log(response);
        this.isLoading = false;                
        this.pagination = response;               
        this.installazioni = response.data;                
        this.installazioneTree = [new InstallazioneTree(0,'Installazioni',response.data)];
        

    }
    protected handleError(error: any) {
        this.isLoading = false;
        console.error(error);
    }
    
    

}
