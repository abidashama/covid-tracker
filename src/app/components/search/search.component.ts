import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  countries: any[] = [];
  selectedCountry: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getCountries().subscribe(
      res => {
        res.response.map((data: any) => {
          this.countries.push({
            name: data
          })
        })
      }
    )
    console.log(this.countries);
  }

}
