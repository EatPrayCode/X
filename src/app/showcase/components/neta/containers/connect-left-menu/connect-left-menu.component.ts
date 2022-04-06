import { Component, EventEmitter, OnInit, Output, ChangeDetectionStrategy, Input } from '@angular/core';
import { animateText, onSideNavChange } from 'src/app/showcase/animations/animations';
import { SidenavService } from 'src/app/showcase/services/sidenav.service';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-connect-left-menu',
  templateUrl: './connect-left-menu.component.html',
  styleUrls: ['./connect-left-menu.component.scss'],
  animations: [onSideNavChange, animateText],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConnectLeftMenuComponent implements OnInit {
  public sideNavState: boolean = true;
  public linkText: boolean = false;
  @Output() selectNetaEvt = new EventEmitter();

  @Input() menuItems: any[] = [];

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
    this.onSinenavToggle();
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 0);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }

  selectNetaLeftMenu(neta: any) {
    this.selectNetaEvt.emit(neta);
  }
}
