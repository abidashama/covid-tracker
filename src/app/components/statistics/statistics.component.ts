import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements OnInit {
  public pieChartData: any;
  public barChartData: any;
  totalPopulation: number;
  tests: number;
  deaths: number;
  recovered: number;
  countryStat: boolean = true;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {

  }

  getStatistics(country) {
    this.api.getstatistics(country).subscribe(
      data => {
        this.totalPopulation = data.response[0].population;
        this.tests = data.response[0].tests.total;
        this.deaths = data.response[0].deaths.total;
        this.recovered = data.response[0].cases.recovered;

        this.pieChartData = {
          labels: ['Active', 'Critical'],
          datasets: [
            {
              data: [data.response[0].cases.active, data.response[0].cases.critical],
              backgroundColor: [
                "#FFA500",
                "#FF0000"

              ],
              hoverBackgroundColor: [
                "#FFB74D",
                "#FF5C5C"
              ]
            }
          ]
        };

        this.barChartData = {
          labels: ['Cases', 'Deaths', 'Recovered'],
          datasets: [
            {
              label: 'Statistics',
              backgroundColor: '#42A5F5',
              data: [data.response[0].cases.total, data.response[0].deaths.total, data.response[0].cases.recovered]
            }
          ]
        };

      }
    )
  }

  countrySelected(country) {
    this.countryStat = false;
    this.getStatistics(country);
  }

  clearSearch(event) {
    if (event) {
      this.countryStat = true;
    }
  }

}
