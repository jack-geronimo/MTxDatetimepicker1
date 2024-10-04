import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../service/LanguageService";
import {CommunicationService} from "../service/communication.service";

@Component({
  selector: 'app-data',
  templateUrl: './date-view.component.html',
  styleUrl: './date-view.component.scss'
})

export class DateViewComponent implements OnInit {

  startDate: Date | null = null;
  currentLocale: string | undefined;

  constructor(
    private readonly languageService: LanguageService,
    private readonly communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.languageService.currentLocale$.subscribe((locale: string) => {
      this.currentLocale = locale;
    });

    this.communicationService.currentDate.subscribe((date: Date | null) => {
      this.startDate = date;
    });
  }

  setCurrentDate() {
    this.startDate = null;
    this.communicationService.setDate(new Date());
  }

  clearDate() {
    this.startDate = null;
    this.communicationService.setDate(null);

  }
}
