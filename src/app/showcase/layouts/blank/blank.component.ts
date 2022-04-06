import { Router, NavigationEnd } from '@angular/router';
import { AppConfigService } from './../../service/appconfigservice';
import { AppConfig } from './../../models/appconfig';
import { Subscription } from 'rxjs';
import { PrimeNGConfig, MenuItem, SelectItem, TreeNode, MessageService, SelectItemGroup } from 'primeng/api';

import { MatDialog } from '@angular/material/dialog';
import browser from 'browser-detect';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { environment as env } from '../../../../environments/environment';

import {
  routeAnimations,
  LocalStorageService,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme,
  AppState
} from './../../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from './../../core/settings/settings.actions';
import { ChooseAppSettingsModalComponent } from './../../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { SigninComponent } from './../../core/auth/components/signin/signin.component';
import { Country, Customer, Representative } from './../../models/customer';
import { CustomerService } from './../../service/customerservice';
import { NodeService } from './../../service/nodeservice';

import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { StateService } from '../../services/state.service';

declare let gtag: Function;

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  menuActive: boolean;
  newsActive: boolean = true;
  news_key = 'primenews';
  public subscription: Subscription;
  activeMenuIndex: number;
  ref: DynamicDialogRef;
  versions: any[];

  constructor(
    private store: Store<AppState>,
    private storageService: LocalStorageService,
    private dialog: MatDialog,
    public stateService: StateService,
    private router: Router,
    private configService: AppConfigService,
    private primengConfig: PrimeNGConfig,
    private nodeService: NodeService,
    private customerService: CustomerService,
    private cd: ChangeDetectorRef,
    public dialogService: DialogService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.onInitFn();
    this.OninitCore();
    this.primengConfig.ripple = true;
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("GTAG FIX Required.");
        gtag('config', 'UA-here-1',
          {
            'page_path': '/primeng' + event.urlAfterRedirects
          }
        );

        this.hideMenu();
      }
    });

    this.newsActive = this.newsActive && this.isNewsStorageExpired();
  }

  show() {
    this.ref = this.dialogService.open(SigninComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });
  }

  toggleMenu(event: Event, index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
    event.preventDefault();
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
    const item: any = {
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
      link: 'home',
      label: 'app.menu.connect',
      icon: 'home'
    },
    {
      link: 'netas',
      label: 'app.menu.netas',
      icon: 'home'
    },
    {
      link: 'dashboard',
      label: 'app.menu.dashboard',
      icon: 'home'
    },
    // {
    //   link: 'admin-dashboard',
    //   label: 'app.menu.admin-dashboard',
    //   icon: 'home'
    // },
    {
      link: 'settings',
      label: 'app.menu.settings',
      icon: 'settings'
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
    // {
    //   link: 'about',
    //   label: 'app.menu.about',
    //   icon: 'home'
    // }
  ];
  navigationSideMenu = [
    ...this.navigation,
    {
      link: 'preferences',
      label: 'app.menu.settings',
      icon: 'home'
    }
  ];

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  OninitCore(): void {
    this.storageService.testLocalStorage();
    if (BlankComponent.isIEorEdgeOrSafari()) {
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

  onLoginClick() { }

  onLogoutClick() {
    this.stateService.logout();
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
  }



  @ViewChild("containerElement") containerElement: ElementRef;

  @ViewChild("dt") table: any;

  @ViewChild("editor") editor: ElementRef;

  // menuActive: boolean = false;

  scrollListener: any;

  chartData: any;

  chartOptions: any;

  items: MenuItem[];

  selectButtonOptions: SelectItem[];

  treeData: TreeNode[];

  val1: number = 240;

  val2: number = 356;

  selectedValue: string = "C";

  checked: boolean = true;

  selectedVal: number = 1;

  rangeValues = [20, 80];

  date1: Date;

  date2: Date;

  customers: Customer[];

  selectedCustomers: Customer[];

  representatives: Representative[];

  statuses: SelectItem[];

  loading: boolean = true;

  fonts: SelectItem[];

  selectedFont: string = '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol';

  inputStyle: string = 'outlined';

  size: string = 'normal';

  selectedCity: City;

  groupedCities: SelectItemGroup[];
    
  cities: City[];

  countries: Country[];

  selectedCountries: Country[];

  price: number;

  config: AppConfig;

  darkMode: boolean = false;

  setAnimation: boolean = false;

  selectedOptions: string[] = ['1'];

  theme: string = 'lara-light-blue';

  onInitFn() {
    this.config = this.configService.config;
    this.changeTableTheme(this.config.dark ? 'lara-dark-blue' : 'lara-light-blue');
    this.configService.updateConfig({ ...this.config, ...{ theme: this.config.dark ? 'lara-dark-blue' : 'lara-light-blue' } })

    this.chartData = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
      datasets: [
        {
          label: "Income",
          data: [40, 59, 40, 50, 56, 40, 70],
          fill: true,
          borderColor: "#03C4E8",
          tension: 0.4,
          backgroundColor: "rgba(3, 196, 232, .2)",
        },
      ],
    };

    this.chartOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            display: false,
          },
          min: 0,
          max: 100,
        },
        x: {
          ticks: {
            display: false,
          },
        },
      },
    };

    this.selectButtonOptions = [
      { label: "Prime", value: 1 },
      { label: "Angular", value: 2 },
      { label: "Themes", value: 3 },
    ];

    this.items = [
      { label: "Home", icon: "pi pi-fw pi-home" },
      { label: "Calendar", icon: "pi pi-fw pi-calendar" },
      { label: "Settings", icon: "pi pi-fw pi-cog" },
    ];

    this.nodeService.getFiles().then((files) => (this.treeData = files));

    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;
    });

    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "XuXue Feng", image: "xuxuefeng.png" },
    ];

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" },
    ];

    this.fonts = [
      {
        label: "Arial",
        value: "Arial,Helvetica Neue,Helvetica,sans-serif",
      },
      {
        label: "System",
        value: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
      },
      {
        label: "Trebuches MS",
        value: "Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif",
      },
      {
        label: "Verdana",
        value: "Verdana,Geneva,sans-serif"
      }
    ];

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
  ];

  this.groupedCities = [
      {
          label: 'Germany', value: 'de', 
          items: [
              {label: 'Berlin', value: 'Berlin'},
              {label: 'Frankfurt', value: 'Frankfurt'},
              {label: 'Hamburg', value: 'Hamburg'},
              {label: 'Munich', value: 'Munich'}
          ]
      },
      {
          label: 'USA', value: 'us', 
          items: [
              {label: 'Chicago', value: 'Chicago'},
              {label: 'Los Angeles', value: 'Los Angeles'},
              {label: 'New York', value: 'New York'},
              {label: 'San Francisco', value: 'San Francisco'}
          ]
      },
      {
          label: 'Japan', value: 'jp', 
          items: [
              {label: 'Kyoto', value: 'Kyoto'},
              {label: 'Osaka', value: 'Osaka'},
              {label: 'Tokyo', value: 'Tokyo'},
              {label: 'Yokohama', value: 'Yokohama'}
          ]
      }
  ];


    this.bindScrollListener();
  }

  ngAfterViewInit() {
    this.setAnimation = true;
    this.cd.detectChanges();
  }

  bindScrollListener() {
    if (!this.scrollListener) {
      this.scrollListener = () => {
        if (window.scrollY > 0) {
          this.containerElement.nativeElement.classList.add(
            "landing-header-sticky"
          );
        } else {
          this.containerElement.nativeElement.classList.remove(
            "landing-header-sticky"
          );
        }
      };
    }

    window.addEventListener("scroll", this.scrollListener);
  }

  unbindScrollListener() {
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
      this.scrollListener = null;
    }
  }

  handleChange(event) {
    this.checked = event.checked;
  }

  toggleDarkMode() {
    this.config.dark = !this.config.dark;
    let theme = this.config.dark
      ? this.theme.replace("light", "dark")
      : this.theme.replace("dark", "light");
    this.config = { ...this.config, dark: this.config.dark, theme: theme };

    this.configService.updateConfig({ ...this.configService.config, ...{ theme: this.config.dark ? 'lara-dark-blue' : 'lara-light-blue', dark: this.config.dark } });
    this.changeTableTheme(theme);
  }

  changeTableTheme(newTheme) {
    let linkElement = document.getElementById("home-table-link");
    this.replaceLink(linkElement, newTheme);
    this.theme = newTheme;
  }

  replaceLink(linkElement, theme) {
    const id = linkElement.getAttribute('id');
    const tableThemeTokens = linkElement.getAttribute('href').split('/');
    const currentTableTheme = tableThemeTokens[tableThemeTokens.length - 2];
    if (currentTableTheme !== theme) {
      const cloneLinkElement = linkElement.cloneNode(true);
      cloneLinkElement.setAttribute('href', linkElement.getAttribute('href').replace(currentTableTheme, theme));
      cloneLinkElement.setAttribute('id', id + '-clone');

      linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', id);
      });
    }
  }

  changeFont() {
    this.editor.nativeElement.style.setProperty(
      "--dd-font",
      this.selectedFont
    );
  }

  changeDesignerTheme(color, darker) {
    this.editor.nativeElement.style.setProperty("--dd-primary", color);
    this.editor.nativeElement.style.setProperty(
      "--dd-primary-darker",
      darker
    );
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, "activity", "gte");
      }
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), "date", "equals");
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    return date.getFullYear() + "-" + month + "-" + day;
  }

  onRepresentativeChange(event) {
    this.table.filter(event.value, "representative", "in");
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.unbindScrollListener();

    if (this.ref) {
      this.ref.close();
    }
  }
}

