import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public selectors!: NodeListOf<Element>; 


  constructor() {}

  ngOnInit(): void {
    this.selectors = document.querySelectorAll('.selector');
    this.checkCurrentTheme();

  }
  
  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    this.selectors.forEach(selector => {
      selector.classList.remove('working');
      const optionTheme = selector.getAttribute('data-theme');
      const optionThemeUrl = `./assets/css/colors/${optionTheme}.css`;
      const linkThemeUrl = this.linkTheme?.getAttribute('href');

      if (optionThemeUrl === linkThemeUrl) {
        selector.classList.add('working');
      }
    });
  }

}
