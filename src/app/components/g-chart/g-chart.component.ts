import { Component, OnInit, Input } from '@angular/core';
import { GoogleChartService } from '../../core/services/google-chart.service';

@Component({
  selector: 'app-g-chart',
  templateUrl: './g-chart.component.html',
  styleUrls: ['./g-chart.component.scss']
})
export class GChartComponent implements OnInit {
  @Input() data: any[];
  @Input() options: any;
  @Input() elementId: string;
  @Input() type: string;


  constructor(private gchartService: GoogleChartService) { }


  ngOnInit(): void {
    switch (this.type) {
      case 'geochart':
        this.gchartService.BuildGeoChart(this.elementId, this.data, this.options);
        break;
      case 'columnchart':
        this.gchartService.BuildColumnChart(this.elementId, this.data, this.options);
        break;
      default:
        console.log("nothing to plot");
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // this.geochartService.BuildGeoChart(this.elementId, this.data, this.options);
    // console.log(changes)
  }
}