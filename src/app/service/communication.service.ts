import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private readonly dateSource = new Subject<Date | null>();
  public currentDate = this.dateSource.asObservable();

  setDate(date: Date | null) {
    this.dateSource.next(date);
  }
}
