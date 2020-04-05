import {Pipe, PipeTransform} from '@angular/core';
import {Permesso} from '../permesso';
@Pipe({
    name: 'permessiSearch'
})
export class PermessiSearchPipe implements PipeTransform {

    transform(items: any, searchText: string): any {
        if (searchText) {
            searchText = searchText.toLowerCase();
            return items.filter((item: Permesso) => item.descrizione.toLowerCase().indexOf(searchText) > -1);
        }
        return items;
    }

}
