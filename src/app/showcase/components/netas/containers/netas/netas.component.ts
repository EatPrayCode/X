import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/showcase/core/core.module';


@Component({
  selector: 'app-netas',
  templateUrl: './netas.component.html',
  styleUrls: ['./netas.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasComponent implements OnInit {


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
      id: 'netas-for-you',
      link: 'netas-for-you',
      name: 'For you',
      label: 'You'
    },
    {
      id: 'netas-top',
      link: 'netas-top',
      name: 'Top',
      label: 'Top'
    },
    {
      id: 'netas-by-state',
      link: 'netas-by-state',
      name: 'State',
      label: 'State'
    },
    {
      link: 'netas-national',
      name: 'National',
      label: 'National'
    },
  ];
  selectedType: any;

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  ngOnInit() {
    this.isAuthenticated$ = of(true);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  onSequenceChangeEvent(event: MatTabChangeEvent) {
    console.log(event.index);
    let link: any = this.mainMenuItems[event.index].link;
    let currentUrl: any = `/netas/${link}`;
    this.router.navigate([currentUrl]);
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
