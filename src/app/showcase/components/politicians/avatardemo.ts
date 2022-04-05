import { ROUTE_ANIMATIONS_ELEMENTS } from './../../core/animations/route.animations';
import { Observable, of } from 'rxjs';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterLinkActive } from '@angular/router';

@Component({
    templateUrl: './avatardemo.html'
})
export class AvatarDemo {

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

    isViewInitialized = false;
  
    navLinks = [];
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private changeDetector: ChangeDetectorRef,
    ) {}
  
  
    isAuthenticated$: Observable<boolean> | undefined;
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    mainMenuItems: any = [
      {
        id: '/netas/netas-for-you',
        link: '/netas/netas-for-you',
        name: 'For you',
        label: 'app.netas.menu.netas-for-you'
      },
      {
        id: '/netas/netas-top',
        link: '/netas/netas-top',
        name: 'Top', 
        label:  'app.netas.menu.netas-top'
      },
      {
        id: '/netas/netas-by-state',
        link: '/netas/netas-by-state',
        name: 'State',
        label: 'app.netas.menu.netas-by-state'
      },
      {
        link: '/netas/netas-national',
        name: 'National',
        label: 'app.netas.menu.netas-national'
      },
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
      
      return this.router.isActive(routerLink.urlTree, false);
    }
}