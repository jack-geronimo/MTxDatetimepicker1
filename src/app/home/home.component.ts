import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangelogComponent } from '../changelog/changelog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private dialog: MatDialog) { }

  openChangelogDialog(): void {
    this.dialog.open(ChangelogComponent);
  }
}
