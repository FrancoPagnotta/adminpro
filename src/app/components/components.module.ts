import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IncrementerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [IncrementerComponent]
})
export class ComponentsModule { }
