import { Component, OnInit } from '@angular/core';
// import { Car } from '../../components/domain/car';
// import { CarService } from '../../service/carservice';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
// import { AppComponent } from '../../app.component';

@Component({
  templateUrl: './xyz.component.html',
  providers: [MessageService]
})
export class XyzComponent implements OnInit {

  cars1: any[];

  cars2: any[];

  brands: SelectItem[];

  clonedCars: { [s: string]: any; } = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.cars1 = this.getCarsSmall();
    this.cars2 = this.getCarsSmall();

    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Ford', value: 'Ford' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];
  }

  onRowEditInit(car: any) {
    this.clonedCars[car.vin] = { ...car };
  }

  onRowEditSave(car: any) {
    if (car.year > 0) {
      delete this.clonedCars[car.vin];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Car is updated' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Year is required' });
    }
  }

  onRowEditCancel(car: any, index: number) {
    this.cars2[index] = this.clonedCars[car.vin];
    delete this.clonedCars[car.vin];
  }

  getCarsSmall() {
    const data = [{
      vin: '11',
      year: 1234,
      brand: 'fff',
      color: 'red'
    }, {
      vin: '22',
      year: 4567,
      brand: 'fff',
      color: 'red'
    }, {
      vin: '33',
      year: 8901,
      brand: 'fff',
      color: 'red'
    }, {
      vin: '44',
      year: 2345,
      brand: 'fff',
      color: 'red'
    }];

    return data;
  }

}
