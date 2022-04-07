import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  percentageProgress: number = 40;

  constructor() {}

  getPercentageProgress(): string {
    return `${this.percentageProgress}%`;
  }

  changePercentage(value: number) {
    if (this.percentageProgress >= 100 && value >= 0) {
      return this.percentageProgress = 100;
    }
    
    if (this.percentageProgress <= 0 && value <= 0) {
    return this.percentageProgress = 0;
    }

    return this.percentageProgress = this.percentageProgress + value;
  }
}

