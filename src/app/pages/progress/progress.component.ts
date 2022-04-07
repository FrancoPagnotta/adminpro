import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Output() progress1: number = 20;
  @Output() progress2: number = 40;

  constructor() {}

  ngOnInit(): void {
  }

  getProgress(percentage: number): string {
    return `${percentage}%`;
  }
}

