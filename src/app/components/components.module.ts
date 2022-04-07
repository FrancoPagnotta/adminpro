import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';



@NgModule({
  declarations: [
    IncrementerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IncrementerComponent]
})
export class ComponentsModule { }
