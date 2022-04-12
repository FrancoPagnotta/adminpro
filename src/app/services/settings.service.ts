import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme'); 
  
  constructor() { 
    const theme = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkTheme?.setAttribute('href',theme);
  }

  changeAppTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const selectors: NodeListOf<Element> = document.querySelectorAll('.selector');
    selectors.forEach(selector => {
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
