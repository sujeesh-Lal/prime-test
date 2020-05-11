import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';



const routes: Routes = [
  // { path: '', redirectTo: 'xyz', pathMatch: 'full' },
  { path: 'xyz', component: XyzComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
