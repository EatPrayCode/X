import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { BigInputComponent } from './big-input/big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { DemoMaterialModule } from './demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NetasListComponent } from './netas-list/netas-list/netas-list.component';
import { SpeedDialFabComponent } from './speed-dial-fab/speed-dial-fab.component';
import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    TranslateModule,
    FlexLayoutModule,

    DemoMaterialModule,
    RouterModule,
    CardModule,
    ButtonModule,
  ],
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    NetasListComponent,
    SpeedDialFabComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TranslateModule,
    DemoMaterialModule,
    CardModule,
    ButtonModule,

    BigInputComponent,
    BigInputActionComponent,
    NetasListComponent,
    SpeedDialFabComponent
  ]
})
export class SharedModule {
  constructor() {}
}
