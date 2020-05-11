import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-agedit',
  templateUrl: './agedit.component.html',
  styleUrls: ['./agedit.component.css']
})
export class AgeditComponent {

  gridApi;
  gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];
  rowData;
  columnDefs;
  defaultColDef;
  pinnedTopRowData;
  pinnedBottomRowData;

  constructor() {
    this.rowData = [
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Bob',
        lastName: 'Harrison',
        gender: 'Male',
        address:
          '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Mary',
        lastName: 'Wilson',
        gender: 'Female',
        age: 11,
        address:
          '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
        mood: 'Sad',
        country: 'Ireland',
      },
      {
        firstName: 'Sadiq',
        lastName: 'Khan',
        gender: 'Male',
        age: 12,
        address:
          '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
        mood: 'Happy',
        country: 'Ireland',
      },
      {
        firstName: 'Jerry',
        lastName: 'Mane',
        gender: 'Male',
        age: 12,
        address:
          '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
        mood: 'Happy',
        country: 'Ireland',
      },
    ];
    this.columnDefs = [
      { field: 'firstName' },
      { field: 'lastName' },
      { field: 'gender' },
      { field: 'age' },
      { field: 'mood' },
      { field: 'country' },
      {
        field: 'address',
        minWidth: 550,
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 110,
      editable: true,
      resizable: true,
    };
    this.pinnedTopRowData = getPinnedTopData();
    this.pinnedBottomRowData = getPinnedBottomData();
  }

  onBtStopEditing() {
    this.gridApi.stopEditing();
  }

  onBtStartEditing(key, char, pinned) {
    this.gridApi.setFocusedCell(0, 'lastName', pinned);
    this.gridApi.startEditingCell({
      rowIndex: 0,
      colKey: 'lastName',
      rowPinned: pinned,
      keyPress: key,
      charPress: char,
    });
  }

  onBtNextCell() {
    this.gridApi.tabToNextCell();
  }

  onBtPreviousCell() {
    this.gridApi.tabToPreviousCell();
  }

  onBtWhich() {
    const cellDefs = this.gridApi.getEditingCells();
    if (cellDefs.length > 0) {
      const cellDef = cellDefs[0];
      console.log(
        'editing cell is: row = ' +
        cellDef.rowIndex +
        ', col = ' +
        cellDef.column.getId() +
        ', floating = ' +
        cellDef.rowPinned
      );
    } else {
      console.log('no cells are editing');
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}

function getPinnedTopData() {
  return [
    {
      firstName: '##',
      lastName: '##',
      gender: '##',
      address: '##',
      mood: '##',
      country: '##',
    },
  ];
}
function getPinnedBottomData() {
  return [
    {
      firstName: '##',
      lastName: '##',
      gender: '##',
      address: '##',
      mood: '##',
      country: '##',
    },
  ];
}
function getCharCodeFromEvent(event) {
  event = event || window.event;
  return typeof event.which === 'undefined' ? event.keyCode : event.which;
}
function isCharNumeric(charStr) {
  return !!/\d/.test(charStr);
}
function isKeyPressedNumeric(event) {
  const charCode = getCharCodeFromEvent(event);
  const charStr = String.fromCharCode(charCode);
  return isCharNumeric(charStr);
}
