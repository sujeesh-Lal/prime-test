import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AggridComponent } from './containers/aggrid/aggrid.component';
import { AgeditComponent } from './containers/agedit/agedit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'prime', component: DashboardComponent },
  { path: 'aggrid', component: AggridComponent },
  { path: 'agedit', component: AgeditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
