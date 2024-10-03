import {ChangeDetectorRef, Pipe, PipeTransform} from '@angular/core';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../service/LanguageService';

@Pipe({
  name: 'localizedDate',
  pure: false // Mark the pipe as impure to ensure it updates when the locale changes
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private languageService: LanguageService, private cdr: ChangeDetectorRef) {
    this.languageService.currentLocale$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(value: Date | null): string | null {
    if (!value) return null;

    const locale = this.languageService.getCurrentLocale();
    const datePipe = new DatePipe(locale);
    return datePipe.transform(value, 'full'); // Use 'short' or any other desired format
  }
}
