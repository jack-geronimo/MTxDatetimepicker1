import {CommonModule,} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggle} from "@angular/material/slide-toggle";
//import { MtxNativeDatetimeModule } from '@ng-matero/extensions/core';
//import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';
// import { MtxLuxonDatetimeModule } from '@ng-matero/extensions-luxon-adapter';
import {MtxDateFnsDatetimeModule} from '@ng-matero/extensions-date-fns-adapter';

import {MtxDatetimepickerModule,} from '@ng-matero/extensions/datetimepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MtxDatetimepickerModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSlideToggle,
    //MtxNativeDatetimeModule,
    //MtxMomentDatetimeModule,
    //MtxLuxonDatetimeModule,
    MtxDateFnsDatetimeModule,

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MtxDatetimepickerModule,
    MatSlideToggle,
    //MtxNativeDatetimeModule,
    //MtxMomentDatetimeModule,
    //MtxLuxonDatetimeModule,
    MtxDateFnsDatetimeModule,
  ]
})
export class MaterialModule {
}
