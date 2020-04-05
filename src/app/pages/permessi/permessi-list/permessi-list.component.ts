import { Component, OnInit } from '@angular/core';

// App imports
import {Permesso} from '../permesso';
import {PermessiService} from '../_services/permessi.service';

@Component({
  selector: 'app-permessi-list',
  templateUrl: './permessi-list.component.html',
  styleUrls: ['./permessi-list.component.scss']
})
export class PermessiListComponent implements OnInit {

  permessi: Permesso[];
  isLoading: Boolean = false;
  public searchText: string;
  constructor( private permessiService: PermessiService) { }

  ngOnInit() {
      this.getPermessi();
  }
  getPermessi(): void {
    this.isLoading = true;
      this.permessiService.getPermessi()
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error));
  }

  protected handleResponse(response: Permesso[]) {
    this.isLoading = false;     
    this.permessi = response;
  }
  protected handleError(error: any) {
    this.isLoading = false;
    console.error(error);
  }
}
