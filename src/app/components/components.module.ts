import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonutComponent } from './donut/donut.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementerComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementerComponent,
    DonutComponent
  ]
})
export class ComponentsModule { }
