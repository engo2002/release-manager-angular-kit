import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsnewDialogComponent } from './whatsnew-dialog.component';

describe('WhatsnewDialogComponent', () => {
  let component: WhatsnewDialogComponent;
  let fixture: ComponentFixture<WhatsnewDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsnewDialogComponent]
    });
    fixture = TestBed.createComponent(WhatsnewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
