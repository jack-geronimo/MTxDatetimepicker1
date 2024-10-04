import {LOCALE_ID, NgModule} from '@angular/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HomeComponent} from './home/home.component';
import {FormComponent} from './datetimepicker/form.component';
import {DataComponent} from './datetimepicker/data/data.component';
import {MatDialogModule} from "@angular/material/dialog";

import {LanguageService} from './service/LanguageService';
import { LocalizedDatePipe } from './shared/localized-date.pipe';
import { LocaleButtonColorPipe } from './shared/locale-button-color.pipe';
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeDe);
registerLocaleData(localeFr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    DataComponent,
    LocalizedDatePipe,
    LocaleButtonColorPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useFactory: (languageService: LanguageService) => languageService.getCurrentLocale(),
      deps: [LanguageService]
    },
    {
      provide: LOCALE_ID,
      useFactory: (languageService: LanguageService) => languageService.getCurrentLocale(),
      deps: [LanguageService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
