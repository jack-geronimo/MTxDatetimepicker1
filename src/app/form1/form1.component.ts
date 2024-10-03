import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { de, fr, enGB, enUS } from 'date-fns/locale';
import { LanguageService } from '../service/LanguageService';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
})
export class Form1Component implements OnInit {
  formGroup: UntypedFormGroup;
  currentLocale: string | undefined;

  constructor(
    fbGroup: UntypedFormBuilder,
    private dateAdapter: DateAdapter<any>,
    private languageService: LanguageService,
    private communicationService: CommunicationService,
  ) {
    this.formGroup = fbGroup.group({
      startDate: [null as Date | null],
    });
  }

  ngOnInit(): void {
    this.languageService.currentLocale$.subscribe(locale => {
      this.setDtLocale(locale);
      this.currentLocale = locale; // Ensure currentLocale is updated
      const startDate = this.formGroup.get('startDate')?.value;
      this.formGroup.get('startDate')?.setValue(startDate);
    });

    this.communicationService.currentMessage.subscribe(date => {
      this.formGroup.get('startDate')?.setValue(date);
    });
  }

  setDtLocale(locale: string): void {
    switch (locale) {
      case 'en-US':
        this.dateAdapter.setLocale(enUS);
        this.dateAdapter.setLocale({ ...enUS, formatLong: {
            date: () => 'MM/dd/yyyy',
            time: () => 'HH:mm',
            dateTime: () => 'MM/dd/yyyy HH:mm'
          }});
        break;
      case 'en-GB':
        this.dateAdapter.setLocale(enGB);
        break;
      case 'fr-FR':
        this.dateAdapter.setLocale(fr);
        break;
      case 'de-DE':
        this.dateAdapter.setLocale(de);
        break;
      default:
        this.dateAdapter.setLocale(fr);
        break;
    }
  }

  onFormSubmit(event: Event): void {
    console.log('Form Submitted', this.formGroup.value);
    console.log('current language', this.languageService.getCurrentLocale());
  }

  switchToGerman() {
    this.languageService.setLocale('de-DE');
  }

  switchToEnglish() {
    this.languageService.setLocale('en-US');
  }

  switchToFrench() {
    this.languageService.setLocale('fr-FR');
  }

  switchToBritishEnglish() {
    this.languageService.setLocale('en-GB');
  }

  sendStartDate() {
    const startDate = this.formGroup.get('startDate')?.value;
    if (startDate) {
      this.communicationService.setDate(startDate);
    }
  }
}
