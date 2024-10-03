import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLocaleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('fr-Fr'); // Default to France
  currentLocale$ = this.currentLocaleSubject.asObservable();

  setLocale(locale: string) {
    this.currentLocaleSubject.next(locale);
  }

  getCurrentLocale(): string {
    return this.currentLocaleSubject.getValue();
  }
}
