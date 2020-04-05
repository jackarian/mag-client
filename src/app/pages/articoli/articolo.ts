export class Articolo {
    codice: string;
    descrizione: string;
    prezzo1: number;
    prezzo2: number;
    um: string;
    iva: number;
    pezzi: number;
    descrizione_en: string;
    um_en: number;
    flag_confezione: string;
    gestione_matricola: string;
    genera_garanzia: string;
    peso_kg: number;
    peso_kg_collo: number;
    servizio: number;
    tipo: number;
    flag_kit: string;
    codice_fornitore?:string ;
    codice_a_barre?:string;
    immagine1?:string ;
    immagine1_web?:string ;
    fornitore_old?: number;
    fornitore?: number;
    gestione_lotti?: string;
    non_applicare_percentuale?: string;
    cat1?: string;
    cat2?: string;
    cat3?: string;
    cat4?: string;
    cat5?: string;
    modalita_vendita?: string;
    dimensioni?: number;
    colore?: string;
    visibile_online?: string;
    codice_fornitore2?:string ;
    codice_fornitore3?:string ;
    codice_fornitore4?:string ;
    codice_fornitore5?:string ;
    codice_fornitore6?:string ;
    posizione_magazzino?:number;
    visibile_se_registrato?: string;
    is_descrizione?:string;
    disponibilita_reale?: number;
    disponibilita_reale_ts?:number;
    categoria?: number;
    sottocategoria?: number;
    prezzo_medio?: number;
    prezzo_medio_data?: number;
    prezzo_medio_ts?: number;
    costo_medio_ponderato?: number;
    costo_medio_ponderato_data?: number;
    costo_medio_ponderato_ts?: number;
    conto_ven: number;
    conto_acq: number;
    stato_copertina: number;
    stato_disco: number;
    artista: string;
    formato: string;
    label: string;
    master: string;
    nazione: string;
    anno:  number;
    genere: string;
    info: string;
    discogs: string;
    online: boolean;
    togoonline: boolean;
    vinile: string;
    valido: string;
    style: string;    
    data_creazione: string;
    prezzo_fisso: number;
    inserito_da?: number;
    ultima_data_ordine: string;
    magazzino: number;
    preordine: number;       
    annotazioni: string;
    
    constructor() {}
}
