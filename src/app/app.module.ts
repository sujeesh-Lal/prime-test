import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { AgGridModule } from 'ag-grid-angular';

import { CarService } from './dashboard/services/car.service';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    ToastModule,
    FormsModule,
    AppRoutingModule, HttpClientModule,
    AgGridModule.withComponents([])

  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
