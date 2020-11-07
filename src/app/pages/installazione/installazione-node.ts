import {Installazione} from './installazione';
export class InstallazioneNode {
    
    id:number;
    descrizione:String;
    value:Installazione;
    type:'installation';
    
    constructor(value:Installazione){
        this.id = value.id;
        this.value =value;
        this.descrizione = value.descrizione
    }
}
