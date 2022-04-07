import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  percentageProgress: number = 40;
  percentage!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.createFormControl();
    this.percentage.setValue(this.percentageProgress);
    this.percentage.valueChanges.subscribe((value: number) => {
      this.percentageProgress = value;
    });
  }

  createFormControl(): void {
    this.percentage = new FormControl('', [Validators.min(0), Validators.max(100)]);
  }

  getPercentageProgress(): string {
    return `${this.percentageProgress}%`;
  }

  changePercentage(value: number): number {
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

