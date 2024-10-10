import { Component, OnInit } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { ChangelogService } from '../service/changelog.service';
import { CommonModule } from '@angular/common';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelHeader} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";

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
    MatIconButton
  ],
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  changelog: string | undefined;

  constructor(
    private readonly changelogService: ChangelogService,
    public dialogRef: MatDialogRef<ChangelogComponent>
  ) { }

  ngOnInit(): void {
    this.changelogService.getChangelog().subscribe(data => {
      console.log(data)
      this.changelog = data;
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
