import { Component, OnInit } from '@angular/core';
import { ChartInfo } from 'src/app/components/interfaces/chart';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styleUrls: ['./graphic1.component.css']
})
export class Graphic1Component implements OnInit {
  
  public labelChart1: ChartInfo = {
    chartLabels: ['angular','react','vue'],
    chartData: [350, 450, 100]
  };

  public labelChart2: ChartInfo = {
    chartLabels: ['node','express','mongodb'],
    chartData: [200, 350, 100]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
