import { async, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../../core/core.module';
import * as fromRoot from '../../store/reducers';
import { UserAreaModule } from '../../user-area.module';
import { TwoFactorDialogComponent } from './two-factor-dialog.component';
import { EffectsModule } from '@ngrx/effects';

describe('TwoFactorDialogComponent', () => {
  let component: TwoFactorDialogComponent;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        UserAreaModule,
        RouterTestingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(fromRoot.reducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MatDialog);
    component = dialog.open(TwoFactorDialogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
