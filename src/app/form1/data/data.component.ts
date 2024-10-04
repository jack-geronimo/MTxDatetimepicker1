import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../../service/LanguageService";
import {CommunicationService} from "../../service/communication.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})

export class DataComponent implements OnInit {

  startDate: Date | null | undefined;
  currentLocale: string | undefined;

  constructor(
    private readonly languageService: LanguageService,
    private readonly communicationService: CommunicationService) {
  }

  ngOnInit() {
    this.languageService.currentLocale$.subscribe((locale: string) => {
      this.currentLocale = locale;
    });

    this.communicationService.currentMessage.subscribe((date: Date | null) => {
      this.startDate = date;
    });

    if (!this.startDate) {
      this.startDate = new Date();
    }

    if (!this.startDate) {
      this.startDate = new Date();
    }
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
