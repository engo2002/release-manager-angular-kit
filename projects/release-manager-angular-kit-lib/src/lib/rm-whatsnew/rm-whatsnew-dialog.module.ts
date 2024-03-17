import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsnewDialogComponent } from './whatsnew-dialog.component';
import { MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { AngularImageViewerModule } from "@hreimer/angular-image-viewer";



@NgModule({
  declarations: [
    WhatsnewDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogContent,
    AngularImageViewerModule,
    MatDialogActions,
    MatDialogClose
  ],
  exports: [
    WhatsnewDialogComponent
  ]
})
export class RmWhatsnewDialogModule { }
