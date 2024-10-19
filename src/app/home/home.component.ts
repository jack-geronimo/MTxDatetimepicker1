import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReleaseNoteComponent } from '../release-log/release-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private readonly dialog: MatDialog) { }

  openChangelogDialog(): void {
    this.dialog.open(ReleaseNoteComponent);
  }
}
