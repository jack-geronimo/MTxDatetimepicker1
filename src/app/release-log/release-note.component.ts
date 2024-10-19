import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {ChangelogService} from '../service/changelog.service';

@Component({
  selector: 'app-changelog',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatIcon,
    MatIconButton,
    MatDialogClose
  ],
  templateUrl: './release-note.component.html',
  styleUrls: ['./release-note.component.scss']
})
export class ReleaseNoteComponent implements OnInit {

  changelog: string | undefined;

  constructor(
    private readonly changelogService: ChangelogService,
    public dialogRef: MatDialogRef<ReleaseNoteComponent>
  ) {
  }

  ngOnInit(): void {
    this.changelogService.getChangelog().subscribe(data => {
      console.log(data)
      this.changelog = data;
    });
  }
}
