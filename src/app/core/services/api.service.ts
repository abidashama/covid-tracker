import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private constant: Constants) { }

  public getCountries(): Observable<any> {
    return this.http.get(this.constant.API_ENDPOINT + 'countries').pipe(map((res: any) => res));
  }
}
