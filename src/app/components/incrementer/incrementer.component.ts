import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {
  @Input() progress!: number;
  @Output() emitProgressEvent: EventEmitter<number> = new EventEmitter<number>();
  control!: FormControl;
  

  constructor() { }

  ngOnInit(): void {
    this.createFormControl();
    this.control.setValue(this.progress);
    this.control.valueChanges.subscribe((value: number) => {
      if (this.control.value === '') {
        this.progress = 0;
      } else {
        this.progress = value;
      }
      this.emitProgressEvent.emit(this.progress);
    })
  }

  createFormControl(): void {
    this.control = new FormControl('', [Validators.min(0), Validators.max(100)]);
  }

  changeProgress(value: number): void {
    if (this.progress >= 100 && value >= 0) {
      this.progress = 100;
    }else if (this.progress <= 0 && value <= 0) {
      this.progress = 0;
    } else {
      this.progress += value;
      this.control.setValue(this.progress);
      this.emitProgressEvent.emit(this.progress);
    }
  }

}
