import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { NotpageComponent } from './notpage/notpage.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    Graphic1Component,
    NotpageComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    Graphic1Component,
    NotpageComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
