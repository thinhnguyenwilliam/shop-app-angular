import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test-translate',
  templateUrl: './test-translate.component.html',
  styleUrls: ['./test-translate.component.scss']
})
export class TestTranslateComponent {
  constructor(private readonly translate: TranslateService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');

    // Check browser language
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|vi/) ? browserLang : 'en');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedLang = target.value;
    this.translate.use(selectedLang);
  }
  
}
