import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CovidService {
    constructor(private http: HttpClient) { }

    getAll(callback) {
        return this.http.get('https://covid-india-cases.herokuapp.com/states/').subscribe(
            data => callback(data)
        );
    }
}