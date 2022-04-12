import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Menu, SubMenu } from '../interfaces/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private sidebarSiervice: SidebarService) { }

  ngOnInit(): void {
    this.menu = this.sidebarSiervice.menu;
  }

}
