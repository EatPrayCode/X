import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AuthModule,
    FirebaseModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreAuthModule { }
