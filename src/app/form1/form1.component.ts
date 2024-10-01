import {Component, ElementRef, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {MTX_DATETIME_FORMATS} from '@ng-matero/extensions/core';
import {MtxDatetimepickerType} from '@ng-matero/extensions/datetimepicker';
import {DateAdapter} from '@angular/material/core';
import {de, enGB, enUS} from 'date-fns/locale';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
  providers: [
    {
      provide: MTX_DATETIME_FORMATS,
      useValue: {
        parse: {
          dateInput: 'dd.LL.yyyy',
          monthInput: 'LLLL',
          yearInput: 'yyyy',
          datetimeInput: 'dd.LL.yyyy HH:mm',
          timeInput: 'HH:mm',
        },
        display: {
          dateInput: 'dd.LL.yyyy',
          monthInput: 'LLLL',
          yearInput: 'yyyy',
          datetimeInput: 'dd.LL.yyyy HH:mm',
          timeInput: 'HH:mm:ss',
          monthYearLabel: 'yyyy',
          dateA11yLabel: 'DDD',
          monthYearA11yLabel: 'LLLL yyyy',
          popupHeaderDateLabel: 'dd LLL, ccc',
        },
      },
    },
  ],
})

export class Form1Component {
  @ViewChild('infoDiv') infoDiv!: ElementRef;
  formGroup: UntypedFormGroup;
  firstNameInput: string | null = null;
  birthdayInput: Date | null = null;
  mtxType!: MtxDatetimepickerType

  constructor(
    fbGroup: UntypedFormBuilder,
    private dateAdapter: DateAdapter<any>,
  ) {
    this.formGroup = fbGroup.group({
      firstName: [''],
      dtPicker: [''],
    });
  };

  ngOnInit(): void {
    this.setDtLocale(navigator.language);
  }

  setDtLocale(locale: string): void {

    switch (locale) {
      case "en-US":
        this.dateAdapter.setLocale(enUS);
        break;
      case "en-GB":
        this.dateAdapter.setLocale(enGB);
        break;
      case "de-DE":
        this.dateAdapter.setLocale(de);
        break;
      default:
        this.dateAdapter.setLocale(de);
        break;
    }
    //    this.dateAdapter.setLocale(locale);
  }

  onFormSubmit(event: Event): void {

    console.log('Form Submitted', this.formGroup.value);

    this.firstNameInput = this.formGroup.get('firstName')?.value;
    this.birthdayInput = this.formGroup.get('dtPicker')?.value;
  }
}
