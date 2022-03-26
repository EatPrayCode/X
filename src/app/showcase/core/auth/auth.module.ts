import { SigninMobileComponent } from './components/signin-mobile/signin-mobile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChooseAppSettingsModalComponent } from './components/choose-app-settings-modal/choose-app-settings-modal.component';
import { DemoMaterialModule } from '../../shared/demo-material-module';

@NgModule({
  declarations: [
    SigninComponent,
    SigninMobileComponent,
    ChooseAppSettingsModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports: [
    SigninComponent,
    SigninMobileComponent
  ]
})
export class AuthModule { }
