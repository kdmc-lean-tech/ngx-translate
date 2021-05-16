import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-translate';

  constructor(private translateService: TranslateService) {
    if (localStorage.getItem('lang')) {
      this.translateService.setDefaultLang(localStorage.getItem('lang'));
    } else {
      localStorage.setItem('lang', 'en');
      this.translateService.setDefaultLang(localStorage.getItem('lang'));
    }
  }

  public useLanguage(language: string): void {
    this.translateService.use(language);
    localStorage.setItem('lang', language);
  }
}
