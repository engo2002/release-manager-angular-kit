import { Component, Inject, OnInit } from '@angular/core';
import { Project, ProjectsApiService, Release, ReleasesApiService } from "@engo/release-manager-api-client-angular";
import { RmWhatsNewInput } from "./interfaces/RmWhatsNewInput.interface";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { combineLatest } from "rxjs";

@Component({
  selector: 'rm-whatsnew',
  templateUrl: './whatsnew-dialog.component.html',
  styleUrls: ['./whatsnew-dialog.component.css']
})
export class WhatsnewDialogComponent implements OnInit {
  loading = true;
  hasError = false;
  protected input: RmWhatsNewInput = {};
  releaseData: Release = {}
  projectData: Project = {};

  constructor(private projectApi: ProjectsApiService, private releaseApi: ReleasesApiService, @Inject(MAT_DIALOG_DATA) public data: RmWhatsNewInput,) {
  }

  ngOnInit() {
    this.loading = true;
    this.getInputData();
    if (!this.hasError) {
      this.getReleaseData();
    }
  }

  getReleaseData() {
    combineLatest([this.projectApi.projectsControllerFindOne(this.input.projectId), this.releaseApi.releaseControllerFindReleaseByProjectIdAndReleaseNumber(this.input.projectId, this.input.releaseVersion)])
    .subscribe(([project, release]) => {
      this.projectData = structuredClone(project);
      this.releaseData = structuredClone(release);
      this.loading = false;
    })
  }

  getInputData() {
    if (this.data.projectId && this.data.releaseVersion && this.data.rmUrl) {
      this.input = this.data;
      this.hasError = false;
    } else {
      this.hasError = true;
      this.loading = false;
    }
  }
}
