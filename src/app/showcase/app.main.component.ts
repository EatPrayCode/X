import { Router, NavigationEnd } from '@angular/router';
import { AppConfigService } from './service/appconfigservice';
import { AppConfig } from './domain/appconfig';
import { Subscription } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';



import { MatDialog } from '@angular/material/dialog';
import browser from 'browser-detect';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { environment as env } from './../../environments/environment';

import {
  routeAnimations,
  LocalStorageService,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  AppState
} from './core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from './core/settings/settings.actions';
import { ChooseAppSettingsModalComponent } from './core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './core/auth/components/signin/signin.component';
import { StateService } from './services/state.service';

declare let gtag: Function;

@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
})
export class AppMainComponent implements OnInit {
    menuActive: boolean;

    newsActive: boolean = true;

    config: AppConfig;

    news_key = 'primenews';

    theme: string = "lara-light-blue";

    public subscription: Subscription;

    constructor(
        private store: Store<AppState>,
        private storageService: LocalStorageService,
        private dialog: MatDialog,
        public stateService: StateService,
        private router: Router, private configService: AppConfigService, private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', 'UA-93461466-1',
                      {
                        'page_path': '/primeng' + event.urlAfterRedirects
                      }
                );

                this.hideMenu();
             }
        });

        this.newsActive = this.newsActive && this.isNewsStorageExpired();
    }

    onMenuButtonClick() {
        this.menuActive = true;
        this.addClass(document.body, 'blocked-scroll');
    }

    onMaskClick() {
        this.hideMenu();
    }

    hideMenu() {
        this.menuActive = false;
        this.removeClass(document.body, 'blocked-scroll');
    }

    addClass(element: any, className: string) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element: any, className: string) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    hideNews() {
        this.newsActive = false;
        const now = new Date();
        const item = {
            value: false,
            expiry: now.getTime() + 604800000,
        }
        localStorage.setItem(this.news_key, JSON.stringify(item));
    }

    isNewsStorageExpired() {
        const newsString = localStorage.getItem(this.news_key);
        if (!newsString) {
            return true;
        }
        const newsItem = JSON.parse(newsString);
        const now = new Date()

        if (now.getTime() > newsItem.expiry) {
            localStorage.removeItem(this.news_key);
            return true;
        }

        return false;
    }

    isDarkTheme(theme) {
        return theme.indexOf('dark') !== -1 || theme.indexOf('vela') !== -1 || theme.indexOf('arya') !== -1 || theme.indexOf('luna') !== -1;
    }

    applyScale(scale: number) {
        document.documentElement.style.fontSize = scale + 'px';
    }

    isProd = env.production;
    envName = env.envName;
    version = 'env.versions.app';
    year = new Date().getFullYear();
    logo = 'assets/logo.png';
    languages = ['en', 'fr', 'es'];
    navigation: any = [
      {
        link: 'connect',
        label: 'app.menu.connect',
        icon: 'envelope'
      },
      {
        link: 'netas',
        label: 'app.menu.netas',
        icon: 'book-open'
      },
      // {
      //   link: 'dashboard',
      //   label: 'app.menu.dashboard',
      //   icon: 'bullhorn'
      // },
      {
        link: 'admin-dashboard',
        label: 'app.menu.admin-dashboard',
        icon: 'user'
      },
      // {
      //   link: 'visualize',
      //   label: 'app.menu.visualise',
      //   icon: 'cog'
      // },
      // {
      //   link: 'blog',
      //   label: 'app.menu.blog',
      //   icon: 'blog'
      // },
      {
        link: 'about',
        label: 'app.menu.about',
        icon: 'link'
      }
    ];
    navigationSideMenu = [
      ...this.navigation,
      {
        link: 'settings',
        label: 'app.menu.settings',
        icon: 'github'
      },
      {
        link: 'preferences',
        label: 'app.menu.settings',
        icon: 'github'
      }
    ];
  
    isAuthenticated$: Observable<boolean> | undefined;
    stickyHeader$: Observable<boolean> | undefined;
    language$: Observable<string> | undefined;
    theme$: Observable<string> | undefined;
  
    private static isIEorEdgeOrSafari() {
      return ['ie', 'edge', 'safari'].includes(browser().name || '');
    }
  
    Oninit(): void {
      this.storageService.testLocalStorage();
      if (AppMainComponent.isIEorEdgeOrSafari()) {
        this.store.dispatch(
          actionSettingsChangeAnimationsPageDisabled({
            pageAnimationsDisabled: true
          })
        );
      }
  
      this.isAuthenticated$ = of(false);
      this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
      this.language$ = this.store.pipe(select(selectSettingsLanguage));
      this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    }
  
    openSettingsDialog(): void {
      let dialogRef = this.dialog.open(ChooseAppSettingsModalComponent, {
        hasBackdrop: true,
        disableClose: false,
        height: '100vh',
        minWidth: '90%',
        position: {
          right: '0px',
          bottom: '0px'
        },
        data: {
          obj: {}
        }
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  
    openLoginDialog(): void {
      let dialogRef = this.dialog.open(SigninComponent, {
        hasBackdrop: true,
        disableClose: false,
        height: '100vh',
        minWidth: '90%',
        position: {
          right: '0px',
          bottom: '0px'
        },
        data: {
          obj: {}
        }
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
  
    onLoginClick() {}
  
    onLogoutClick() {
      this.stateService.logout();
    }
  
    onLanguageSelect(event: MatSelectChange) {
      this.store.dispatch(
        actionSettingsChangeLanguage({ language: event.value })
      );
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
