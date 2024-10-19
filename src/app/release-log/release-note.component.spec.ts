import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReleaseNoteComponent } from './release-note.component';
import { ChangelogService } from '../service/changelog.service';
import { of } from 'rxjs';

describe('ChangelogComponent', () => {
  let component: ReleaseNoteComponent;
  let fixture: ComponentFixture<ReleaseNoteComponent>;
  let changelogService: ChangelogService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, ReleaseNoteComponent],
      providers: [
        ChangelogService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseNoteComponent);
    component = fixture.componentInstance;
    changelogService = TestBed.inject(ChangelogService);

    spyOn(changelogService, 'getChangelog').and.returnValue(of('v3.2.0'));

    fixture.detectChanges();
  });

  it('should create and display changelog data', () => {
    expect(component).toBeTruthy();
    expect(component.changelog).toBe('v3.2.0');
  });
});
