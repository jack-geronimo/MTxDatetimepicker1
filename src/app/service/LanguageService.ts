import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLocale: string = 'fr-FR'; // Default locale

  getCurrentLocale(): string {
    return this.currentLocale;
  }

  setLocale(locale: string): void {
    this.currentLocale = locale;
    this.currentLocale$.next(locale); // Notify subscribers about the locale change
  }

  // Observable for current locale
  currentLocale$ = new BehaviorSubject<string>(this.currentLocale);
}
