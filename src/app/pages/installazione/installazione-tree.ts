import {Installazione} from './installazione';
export class InstallazioneTree {
     id:number;
     text:string;
     descrizione:string;
     indirizzoIp:'';
     dataInizioLavori:'';
     children: Installazione[];
     constructor(id:number,text:string,children:Installazione[]){
         this.id = id;
         this.descrizione = text; 
         this.text = text; 
         this.children = children;
    }
}
