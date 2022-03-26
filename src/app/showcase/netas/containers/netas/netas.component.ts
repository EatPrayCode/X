import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from './../../../core/animations/route.animations';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-netas',
  templateUrl: './netas.component.html',
  styleUrls: ['./netas.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetasComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    this.isAuthenticated$ = of(true);
  }
}
