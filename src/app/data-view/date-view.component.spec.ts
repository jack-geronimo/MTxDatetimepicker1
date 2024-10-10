import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateViewComponent } from './date-view.component';
import { LanguageService } from '../service/LanguageService';
import { CommunicationService } from '../service/communication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from '../material.module';
import { LocalizedDatePipe } from '../shared/localized-date.pipe';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DateViewComponent', () => {
  let component: DateViewComponent;
  let fixture: ComponentFixture<DateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateViewComponent, LocalizedDatePipe],
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [
        LanguageService,
        CommunicationService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
