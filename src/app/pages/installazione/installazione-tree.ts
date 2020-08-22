import { Installazione } from './installazione';
import { InstallazioneNode } from './installazione-node';
export class InstallazioneTree {
    id: number;
    text: string;
    descrizione: string;
    indirizzoIp: '';
    dataInizioLavori: '';
    children: InstallazioneNode[];
    constructor(id: number, text: string, childrenTo: Installazione[]) {
        this.id = id;
        this.descrizione = text;
        this.text = text;
        this.children = [];
        for (var product of childrenTo) {
            this.children.push(new InstallazioneNode(product));
        }
    }
}
