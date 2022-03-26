import { onMainContentChange } from './../../animations/animations';
import { Router } from '@angular/router';
import { SidenavService } from './../../services/sidenav.service';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  routeAnimations, ROUTE_ANIMATIONS_ELEMENTS
} from '../../../../core/core.module';

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
      id: 'connect-home',
      link: '/connect/connect-home',
      name: 'Home',
      label: 'app.connect.menu.connect-home'
    },
    {
      id: 'connect-history',
      link: '/connect/connect-history',
      name: 'History',
      label: 'app.connect.menu.connect-history'
    },
    {
      id: 'connect-new',
      link: '/connect/connect-new',
      name: 'New', label:
        'app.connect.menu.connect-new'
    },
    {
      id: 'connect-other',
      link: '/connect/connect-home',
      name: 'Other',
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
    this.router.navigate([`/connect/connect-history/${netaId}`]);
  }

}
