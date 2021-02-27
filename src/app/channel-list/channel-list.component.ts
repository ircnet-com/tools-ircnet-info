/* tslint:disable:triple-equals one-line */
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataTableDirective} from 'angular-datatables';
import {AppSettings} from '../app.settings';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

class Channel {
  name: string;
  userCount: number;
  topic: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  @ViewChild('searchTermInput')
  searchTermInput: ElementRef;

  dtOptions: DataTables.Settings = {};
  channels: Channel[];
  filterTypes = ['Channel or topic', 'Channel', 'Topic'];
  filterType = this.filterTypes[0];
  pageSizes = [25, 50, 100];
  pageSize = this.pageSizes[0];
  searchTerm = '';
  errorMessage: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      dom: 'tipr',
      pagingType: 'full_numbers',
      pageLength: this.pageSize,
      serverSide: true,
      processing: true,
      order: [[ 1, 'desc' ]],
      columns: [{ data: 'name', orderable: true }, { data: 'userCount', orderable: true }, { data: 'topic', orderable: false }],
      ajax: (dataTablesParameters: any, callback) => {
        if (this.filterType == this.filterTypes[0]) {
          dataTablesParameters.search.value = this.searchTerm;
        }
        else if (this.filterType == this.filterTypes[1]) {
          dataTablesParameters.columns[0].search.value = this.searchTerm;
        }
        else if (this.filterType == this.filterTypes[2]) {
          dataTablesParameters.columns[2].search.value = this.searchTerm;
        }

        that.http
          .post<DataTablesResponse>(
            AppSettings.CLIS_URL,
            dataTablesParameters, {}
          )
          .subscribe(response => {
          that.channels = response.data;

          callback({
            recordsTotal: response.recordsTotal,
            recordsFiltered: response.recordsFiltered,
            data: []
          });
        },
        error => this.errorMessage = 'Connection error. Please try again.'
        );
      },
    };
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchTermInput.nativeElement, 'keyup')
      .pipe(debounceTime(300)).subscribe(value => {
      this.filterByChannelName();
    });
  }

  filterTypeChanged(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  filterByChannelName(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
