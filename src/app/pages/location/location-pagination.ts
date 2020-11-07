import {Location} from './location';

export class LocationPagination {


    currentPage: number;
    pageSize: number;
    lastPage: number;
    totalPage: number;
    totalRows: number;
    from: number;
    to: number;
    data: Location[];
    end: number;
    start: number;
    offset: number;

}
