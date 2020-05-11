import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AggridComponent } from './containers/aggrid/aggrid.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgeditComponent } from './containers/agedit/agedit.component';

@NgModule({
  declarations: [DashboardComponent, AggridComponent, AgeditComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TableModule,
    AgGridModule.withComponents([])
  ]
})
export class DashboardModule { }
