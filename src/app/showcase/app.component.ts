import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from './models/appconfig';
import { AppConfigService } from './service/appconfigservice';
import { StateService } from './services/state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(
        public stateService: StateService,
        private configService: AppConfigService,
        private primengConfig: PrimeNGConfig
    ) { }

    config: AppConfig;

    public subscription: Subscription;

    ngOnInit() {
        this.initAuth();
        this.config = { theme: 'lara-light-blue', dark: false }

        this.subscription = this.configService.configUpdate$.subscribe(config => {
            const linkElement = document.getElementById('theme-link');
            this.replaceLink(linkElement, config.theme);
            this.config = config;
        });
    }

    initAuth(): void {
        this.stateService.appSettingsSubject.subscribe(res => {
            console.log(res);
        });
        this.stateService.getAppUser().subscribe();
    }

    replaceLink(linkElement, theme) {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        cloneLinkElement.setAttribute('href', linkElement.getAttribute('href').replace(this.config.theme, theme));
        cloneLinkElement.setAttribute('id', id + '-clone');

        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            cloneLinkElement.setAttribute('id', id);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}