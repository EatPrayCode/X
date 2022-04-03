import { OverlayPanelModule } from 'primeng/overlaypanel';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { TreeModule } from 'primeng/tree'; 
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipModule } from 'primeng/chip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { IconService } from './service/iconservice';
import { CustomerService } from './service/customerservice';
import { PhotoService } from './service/photoservice';
import { VersionService } from './service/versionservice';
import { AppConfigService } from './service/appconfigservice';
import { ProductService } from './service/productservice';

import { AppTopBarComponent } from './layouts/app.topbar.component';
import { AppFooterComponent } from './layouts/app.footer.component';
import { BadgeModule } from 'primeng/badge';
import { LandingComponent } from './components/landing/landing.component';
import { CoreModule } from './core/core.module';
import { AppLayoutComponent } from './layouts/app.layout.component';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AppDemoActionsModule } from './shared/app.demoactions.component';

@NgModule({
    declarations: [
        AppComponent,
        AppTopBarComponent,
        AppFooterComponent,
        LandingComponent,
        AppLayoutComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        ButtonModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        AppDemoActionsModule,
        ChartModule,
        TabMenuModule,
        SliderModule,
        CalendarModule,
        TreeModule,
        ProgressBarModule,
        InputNumberModule,
        ChipModule,
        SelectButtonModule,
        TableModule,
        CheckboxModule,
        ListboxModule,
        DropdownModule,

        DynamicDialogModule,

        CoreModule,
        OverlayPanelModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CarService,CountryService,EventService,NodeService,IconService,CustomerService,PhotoService,VersionService,AppConfigService, ProductService, DialogService, MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
