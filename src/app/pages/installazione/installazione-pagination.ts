import {Installazione} from './installazione';
export class InstallazionePagination {

    currentPage: number;
    pageSize: number;
    lastPage: number;
    totalPage: number;
    totalRows: number;
    from: number;
    to: number;
    data: Installazione[];
    end: number;
    start: number;
    offset: number;
}
