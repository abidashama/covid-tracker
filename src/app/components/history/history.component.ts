import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  basicData: any;
  years = [];
  selectedyear: any;
  dates = [];
  totalCases: number[] = [];
  deaths = [];
  recovered = [];
  countryStat: boolean = true;
  country: string;
  showYear: boolean = false;

  constructor(private api: ApiService) {
    this.years = [
      { year: 2020 },
      { year: 2021 },
      { year: 2022 },
    ];
  }

  ngOnInit(): void {

  }

  getHistory() {
    this.totalCases = [];
    this.deaths = [];
    this.recovered = [];
    this.dates.map(date => {
      this.api.getHistory(this.country, date).subscribe(
        data => {
          this.totalCases.push(data.response[0].cases.total / 1000);
          this.recovered.push(data.response[0].cases.recovered / 1000);
          this.deaths.push(data.response[0].deaths.total / 1000);

          this.basicData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Total Cases',
                data: this.totalCases.push(data.response[0].cases.total / 1000),
                backgroundColor: '#42A5F5',
              },
              {
                label: 'Deaths',
                data: this.recovered.push(data.response[0].cases.recovered / 1000),
                backgroundColor: '#FF0000',
              },
              {
                label: 'Recovered',
                data: this.deaths.push(data.response[0].deaths.total / 1000),
                backgroundColor: '#00D100',
              }
            ]
          }
        }
      )
    })
  }

  getDates(year: number) {
    this.dates = [];
    for (let i = 1; i <= 12; i++) {
      let month = (i < 10) ? `0${i}` : i;
      this.dates.push(`${year}-${month}-01`)
    }
  }

  yearSelected() {
    if (this.country != undefined) {
      this.countryStat = false;
    }
    this.getDates(this.selectedyear.year);
    this.getHistory();
  }

  countrySelected(country) {
    this.country = country;
    this.showYear = true;
  }

  clearSearch(event, element?: string) {
    if (element) {
      this.showYear = false;
    }
    if (event) {
      this.countryStat = true;
    }
  }

}
