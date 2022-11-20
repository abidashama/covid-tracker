import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  countries = [];
  selectedCountry: any;
  @Output() onClearAction = new EventEmitter<string>;
  @Output() country = new EventEmitter<string>;

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
  }

  countrySelected() {
    this.country.emit(this.selectedCountry.name);
  }

  onClear() {
    this.onClearAction.emit('cleared');
  }

}
