import { onMainContentChange } from '../../animations/animations';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  routeAnimations, ROUTE_ANIMATIONS_ELEMENTS
} from './../../../core/core.module';

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardContainerComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mainMenuItems: any = [
    {
      id: 'States',
      link: '/admin-dashboard/states',
      name: 'States',
      label: 'app.connect.menu.connect-home'
    },
    {
      id: 'Netas',
      link: '/admin-dashboard/manage-netas',
      name: 'Netas',
      label: 'app.connect.menu.connect-history'
    }
  ];
  selectedType: any;

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  public onSideNavChange: boolean = false;

  constructor(private _sidenavService: SidenavService, private router: Router) {
    this._sidenavService.sideNavState$.subscribe((res) => {
      this.onSideNavChange = res;
      if (res == true) {
        console.log('Opened');
      } else if (res == false) {
        console.log('Closed');
      }
    });
    // this.handleSelectNeta({});
  }

  ngOnInit(): void { }

  handleSelectNeta(neta: any) {
    let netaId: any = neta.id || 'DEFAULT';
    this.router.navigate([`/dashboard/connect-history/${netaId}`]);
  }

}
