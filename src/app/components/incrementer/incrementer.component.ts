import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  @Input() percentageProgress!: number;
  @Output() emitPercentageEvent: EventEmitter<number> = new EventEmitter<number>();
  percentage!: FormControl;
  

  constructor() { }

  ngOnInit(): void {
    this.createFormControl();
    this.percentage.setValue(this.percentageProgress);
    this.percentage.valueChanges.subscribe((value: number) => {
      if (this.percentage.value === '') {
        this.percentageProgress = 0;
      } else {
        this.percentageProgress = value;
      }
      this.emitPercentageEvent.emit(this.percentageProgress);
    })
  }

  createFormControl(): void {
    this.percentage = new FormControl('', [Validators.min(0), Validators.max(100)]);
  }

  changePercentage(value: number): void {
    if (this.percentageProgress >= 100 && value >= 0) {
      this.percentageProgress = 100;
    }else if (this.percentageProgress <= 0 && value <= 0) {
      this.percentageProgress = 0;
    } else {
      this.percentageProgress += value;
      this.percentage.setValue(this.percentageProgress);
      this.emitPercentageEvent.emit(this.percentageProgress);
    }
    
  }

}
