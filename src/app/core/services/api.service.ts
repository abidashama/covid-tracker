import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Constants } from '../../config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  header = {
    'X-RapidAPI-Key': 'bc177f8cf9msh869569afca410aep1e349cjsn8bdbcc947271',
    'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
  }

  constructor(private http: HttpClient, private constant: Constants) { }

  public getCountries(): Observable<any> {
    return this.http.get(this.constant.API_ENDPOINT + `countries`,
      { headers: this.header }
    ).pipe(map((res: any) => res));
  }

  public getstatistics(country?: string): Observable<any> {
    return this.http.get(this.constant.API_ENDPOINT + (country ? `statistics?country=${country}` : `statistics`),
      { headers: this.header }
    ).pipe(map((res: any) => res));
  }

  public getHistory(country?: string, day?: string): Observable<any> {
    return this.http.get(this.constant.API_ENDPOINT + `history?country=${country}&day=${day}`,
      { headers: this.header }
    ).pipe(map((res: any) => res));
  }
}
