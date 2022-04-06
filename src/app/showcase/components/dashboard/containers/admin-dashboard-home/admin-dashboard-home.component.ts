import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/showcase/core/core.module';


@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardHomeComponent implements OnInit {


  isViewInitialized = false;

  navLinks = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) { }


  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  mainMenuItems: any = [
    {
      id: 'Home',
      link: '/dashboard/connect-home',
      name: 'Home',
      label: 'app.connect.menu.home'
    },
    {
      id: 'history',
      link: '/dashboard/connect-history',
      name: 'History',
      label: 'app.connect.menu.history'
    },
    {
      id: 'new',
      link: '/dashboard/connect-new',
      name: 'New', 
      label:
        'app.connect.menu.new'
    },
    {
      id: 'States',
      link: '/dashboard/states',
      name: 'States',
      label: 'app.connect.menu.home'
    },
    {
      id: 'Netas',
      link: '/dashboard/manage-netas',
      name: 'Netas',
      label: 'app.connect.menu.history'
    }
  ];
  selectedType: any;

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  ngOnInit() {
    this.isAuthenticated$ = of(true);
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    // return this.router.isActive(routerLink.urlTree, false);
    return false;
  }

  value = '';

  activeIndex1: number = 0;

  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));

  OnSearch() {
      console.log("OnSearch", this.value);
  }

  OnSearchNext() {
    console.log("OnSearchNext", this.value);
  }

  OnSearchPrevious() {
    console.log("OnSearchPrevious", this.value);
  }

  OnClear() {
    console.log("OnClear");
    this.value = "";
  }

}
