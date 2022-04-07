import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  percentageProgress: number = 5;

  constructor() {}

  getPercentageProgress(): string {
    return `${this.percentageProgress}%`;
  }

  changePercentage(value: number): void {
    this.percentageProgress = this.percentageProgress + value;
  }
}

