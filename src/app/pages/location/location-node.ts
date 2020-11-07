import {Location} from './location';
import {InstallazioneNode} from '../installazione/installazione-node';
export class LocationNode {
    
    id:number;
    descrizione:String;
    value:Location;
    type:'location';    
    children:InstallazioneNode[];
    constructor(value:Location){
        this.id = value.id;
        this.value =value;
        this.descrizione = value.title;
    }
}
