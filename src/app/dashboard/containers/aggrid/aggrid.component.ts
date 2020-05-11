import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CarService } from './../../services/car.service';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css']
})
export class AggridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  gridApi;
  gridColumnApi;

  columnDefs;
  defaultColDef;
  components;
  rowBuffer;
  rowSelection;
  rowModelType;
  paginationPageSize;
  cacheOverflowSize;
  maxConcurrentDatasourceRequests;
  infiniteInitialRowCount;
  maxBlocksInCache;
  rowData: [];

  constructor(private http: HttpClient, private carService: CarService) {
    this.columnDefs = [
      {
        headerName: 'ID',
        maxWidth: 100,
        valueGetter: 'node.id',
        cellRenderer: 'loadingRenderer',
        pinned: 'left',
      },
      {
        field: 'A',
        minWidth: 150,
        pinned: 'left',
      },
      {
        field: 'B',
        cellEditor: 'agLargeTextCellEditor',
        minWidth: 200,
      },
      {
        field: 'D',
        minWidth: 150,
        cellEditor: 'datePicker',
      },
      { field: 'E' },
      {
        field: 'F',
        minWidth: 150,

      },
      {
        field: 'G',
        minWidth: 150,
      },
      { field: 'H' },
      { field: 'I' },
      { field: 'K' },
      { field: 'L' },
    ];
    this.defaultColDef = {
      flex: 1,
      resizable: true,
      minWidth: 100,
      editable: true,
    };
    this.components = {
      loadingRenderer(params) {
        if (params.value !== undefined) {
          return params.value;
        } else {
          return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
        }
      },
    };
    this.rowBuffer = 0;
    this.rowSelection = 'multiple';
    this.rowModelType = 'infinite';
    this.paginationPageSize = 100;
    this.cacheOverflowSize = 2;
    this.maxConcurrentDatasourceRequests = 1;
    this.infiniteInitialRowCount = 1000;
    this.maxBlocksInCache = 10;
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const cs = this.carService;

    const dataSource = {
      rowCount: null,
      getRows(parms) {
        console.log(
          'asking for ' + parms.startRow + ' to ' + parms.endRow
        );

        cs.getBulkData(parms.startRow, parms.endRow - parms.startRow, true).then((result: any) => {
          console.log(result);
          const rowsThisPage = result.data;
          let lastRow = -1;
          if (result.totalRecords <= parms.endRow) {
            lastRow = result.totalRecords;
          }
          parms.successCallback(rowsThisPage, lastRow);
        });
      },
    };
    params.api.setDatasource(dataSource);
  }

}
