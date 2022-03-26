import { onMainContentChange } from './../../animations/animations';
import { Router } from '@angular/router';
import { SidenavService } from './../../services/sidenav.service';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  routeAnimations, ROUTE_ANIMATIONS_ELEMENTS
} from './../../../core/core.module';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  animations: [onMainContentChange],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mainMenuItems: any = [
    {
      id: 'groups',
      link: '/dashboard/groups',
      name: 'Groups',
      label: 'app.connect.menu.connect-home'
    },
    {
      id: 'contacts',
      link: '/dashboard/contacts',
      name: 'Contacts',
      label: 'app.connect.menu.connect-history'
    },
    {
      id: 'social-accounts',
      link: '/dashboard/social-accounts',
      name: 'Social',
      label: 'app.connect.menu.connect-new'
    },
    {
      id: 'connect-other',
      link: '/dashboard/campaigns',
      name: 'Campaigns',
      label: 'app.connect.menu.connect-other'
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
