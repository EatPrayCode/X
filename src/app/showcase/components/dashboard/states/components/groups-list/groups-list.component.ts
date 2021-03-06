import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from 'src/app/showcase/core/core.module';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsListComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: any[] = [];
  @Output() viewNetaDetails = new EventEmitter();
  @Output() connectNeta = new EventEmitter();
  @Output() toggleState = new EventEmitter();
  @Output() addDistrict = new EventEmitter();
  
  @Input() groups: any;

  ngOnChanges(changes: SimpleChanges) {
    let value: any = changes.groups.currentValue;
  }

  ngOnInit() { }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  openNetaDetails(payload: any) {
    this.viewNetaDetails.emit(payload);
  }

  connectWithNeta(payload: any) {
    this.connectNeta.emit(payload);
  }

  toggleStateFn(payload: any) {
    this.toggleState.emit(payload);
  }

  addDistrictFn(payload: any) {
    this.addDistrict.emit(payload);
  }

}
