import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public element = document.querySelector('#theme');


  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.element?.setAttribute('href',theme);
  }
  
}
