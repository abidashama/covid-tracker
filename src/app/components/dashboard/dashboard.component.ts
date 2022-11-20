import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string = 'Dashboard';
  tableData = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(country?: string) {
    this.api.getstatistics(country).subscribe(
      res => {
        this.tableData = res.response;
      }
    )
  }

  countrySelected(country) {
    this.getStatistics(country);
  }

  clearSearch(event) {
    if (event) {
      this.getStatistics();
    }
  }

}
