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
import {DateViewComponent} from './data-view/date-view.component';
import {MatDialogModule} from "@angular/material/dialog";

import { ChangelogService } from './service/changelog.service';
import {LanguageService} from './service/LanguageService';
import { LocalizedDatePipe } from './shared/localized-date.pipe';
import { LocaleButtonColorPipe } from './shared/locale-button-color.pipe';
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import {HttpClientModule} from "@angular/common/http";
import { MatExpansionModule } from '@angular/material/expansion';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localeDe);
registerLocaleData(localeFr);
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    DateViewComponent,
    FooterComponent,
    LocalizedDatePipe,
    LocaleButtonColorPipe

  ],
  exports: [DateViewComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    ChangelogService,
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
  bootstrap: [AppComponent, DateViewComponent, FooterComponent]
})
export class AppModule {
}
