import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartInfo } from '../interfaces/chart';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  @Input() public title!: string;
  @Input() public doughnutChart!: ChartInfo;

  public doughnutChartData!: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChart.chartLabels,
      datasets: [
        { data: this.doughnutChart.chartData }
      ]
    };
  }

}
