import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public element = document.getElementById('theme');

  constructor() { }

  ngOnInit(): void {
  }
  
  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.element?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

}
