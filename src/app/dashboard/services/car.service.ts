import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from './../models';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get<any>('http://localhost:4200/assets/cars.small.json')
            .toPromise()
            .then(res => res.data as Car[])
            .then(data => data);
    }

    getCarsMedium() {
        return this.http.get<any>('http://localhost:4200/assets/cars.medium.json')
            .toPromise()
            .then(res => res.data as Car[])
            .then(data => data);
    }

    getCarsLarge(first, rows, count) {
        return this.http.get<any>('http://localhost:4200/assets/cars.large.json')
            .toPromise()
            .then(res => res.data as Car[])
            .then((data) => {
                const result: any = {
                    totalRecords: data.length
                };
                const chunk = data.slice(first, first + rows);
                result.data = chunk;
                return result;
            });
    }

    getBulkData(first, rows, count) {
        return this.http.get<any>('http://localhost:4200/assets/huge.data.json')
            .toPromise()
            .then((res) => {
                return res as any[];
            })
            .then((data) => {
                const result: any = {
                    totalRecords: data.length
                };
                const chunk = data.slice(first, first + rows);
                result.data = chunk;
                return result;
            });
    }
}
