import { onMainContentChange } from '../../../../animations/animations';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SidenavService } from 'src/app/showcase/services/sidenav.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/showcase/core/core.module';

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

  @Input() mainMenuItems: any = [];
  selectedType: any;

  handleClickMainMenuItem(item: any) {
    this.selectedType = item;
  }

  public onSideNavChange: boolean = false;
  @Output() selectTabEvt = new EventEmitter();

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

  handleSelectNeta(tab: any) {
    this.selectTabEvt.emit(tab);
  }

}
