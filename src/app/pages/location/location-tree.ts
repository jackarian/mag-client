import {LocationNode} from  './location-node';
import {Location} from './location';
export class LocationTree {
    id: number;
    text: string;
    descrizione: string;
    indirizzoIp: '';
    dataInizioLavori: '';
    children: LocationNode[];
    constructor(id: number, text: string, childrenTo: Location[]) {
        this.id = id;
        this.descrizione = text;
        this.text = text;
        this.children = [];
        for (var product of childrenTo) {
             console.log(product);
            this.children.push(new LocationNode(product));
        }
    }

    updateChildren(childrenTo: Location[]) {
        this.children =[];
        for (var product of childrenTo) {
            this.children.push(new LocationNode(product));
        }
    }
}
