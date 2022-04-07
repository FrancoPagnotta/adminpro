import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  percentageProgress: number = 40;
  percentage: FormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.percentage.setValue(this.percentageProgress);
  }

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

    const result = this.percentageProgress + value;
    this.percentage.setValue(result);
    return this.percentageProgress = result;
  }
}

