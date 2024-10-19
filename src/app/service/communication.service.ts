import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private readonly pickerTypeSubject = new BehaviorSubject<'date' | 'datetime'>('datetime');
  pickerType$ = this.pickerTypeSubject.asObservable();

  private readonly dateSource = new Subject<Date | null>();
  public currentDate = this.dateSource.asObservable();

  setDate(date: Date | null) {
    this.dateSource.next(date);
  }


  togglePickerType(): void {
    const newType = this.pickerTypeSubject.value === 'datetime' ? 'date' : 'datetime';
    this.pickerTypeSubject.next(newType);
  }
}
