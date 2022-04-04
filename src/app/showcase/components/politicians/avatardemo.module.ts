import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDemo } from './avatardemo';
import { AvatarDemoRoutingModule } from './avatardemo-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';

import { AppDemoActionsModule } from '../../shared/app.demoactions.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from '../../shared/shared.module';
import { NetasForYouComponent } from './netas-for-you/netas-for-you.component';

@NgModule({
	imports: [
		CommonModule,
		AvatarDemoRoutingModule,
		AccordionModule,
		ButtonModule,
		TabViewModule,
		ToastModule,
		AvatarModule,
		AvatarGroupModule,
		BadgeModule,
		AppDemoActionsModule,
		CardModule,
		SharedModule
	],
	declarations: [
		AvatarDemo,
		NetasForYouComponent
	]
})
export class AvatarDemoModule { }
