import {Installazione} from '../installazione/installazione';
import {UserTecnical} from '../auth/user-tecnical';
export class Location {
    
    reference: string;
    ipAddress: string;
    creationDate: Date;
    lastUpdate: Date;
    ipPortService: number;
    stato: number;
    title: string;
    active: boolean;
    login: string;
    password: string;
    hotspotTag: string;
    id: number;
    installazioni: Installazione[];
    
    constructor() {}
}
