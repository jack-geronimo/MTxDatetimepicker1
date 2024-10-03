import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSource = new Subject<Date | null>();
  currentMessage = this.messageSource.asObservable();

  setDate(message: Date | null) {
    this.messageSource.next(message);
  }
}
