import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Output() percentageProgress: number = 40;

  constructor() {}

  ngOnInit(): void {
  }

  getPercentageProgress(): string {
    return `${this.percentageProgress}%`;
  }

  updatePercentage(newValue: any): void {
    this.percentageProgress = newValue;
  }
}

