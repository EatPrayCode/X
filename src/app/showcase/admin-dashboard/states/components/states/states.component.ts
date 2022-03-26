import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable, of } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { ROUTE_ANIMATIONS_ELEMENTS } from './../../../../core/core.module';
import { DataService } from '../../../services/data.service';
import { StateService } from './../../../../services/state.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  selectedType: any;
  groups: any = [];
  states$: Observable<any> = of([]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public dialog: MatDialog,
    public stateService: StateService
  ) { }

  handleViewNetaDetails($event: any) {
    const gid = $event.id || 'NOW';
    this.router.navigate(['/admin-dashboard/states/state/' + gid]);
  }

  ngOnInit() {
    this.states$ = this.dataService.getAllGroups();
    this.stateService.appSettingsSubject.subscribe(res => {
      console.log(res);
    });
  }

  handleMessageOptionClick(event: any) {
    let msgTyp = event.value;
    console.log(event);
    this.selectedType = event;
  }

  handleMessageNeta($event: any) {
    this.router.navigate(['/admin-dashboard/connect-new']);
  }

  handleToggleState($event: any) {
    const gid = $event.id;
    let group = $event;
    group = {
      ...group,
      active: !group.active
    };
    this.dataService.editGroupWithGroupId(gid, group);
  }

  addStateFn() {
    const state = {
      name: 'State',
      description: 'State description'
    };
    this.dataService.addGroup(state);
  }

  addDistrictFn($event: any) {
    const gid = $event.id;
    // let group = $event;
    const district = {
      name: 'district',
      description: 'District description'
    };
    // group = {
    //   ...group,
    // districts: group.districts ? [...group.districts, district] : []
    // };
    this.dataService.addDistrictWithStateId(gid, district);
  }

  addConstituencyFn() {
    const gid = "PsLEFq8oPVjG0DECFMcr";
    const districtId = "8QYlYj6QWIa6i5FTlkkc";
    // let group = $event;
    const constituency = {
      name: 'constituencyName',
      description: 'Constituency description'
    };
    // group = {
    //   ...group,
    // districts: group.districts ? [...group.districts, district] : []
    // };
    this.dataService.addConstituencyWithStateIdDistrictId(gid, districtId, constituency);
  }

  addVillageFn() {
    const gid = "PsLEFq8oPVjG0DECFMcr";
    const districtId = "8QYlYj6QWIa6i5FTlkkc";
    const constituencyId = "5jWNngmjX8YCtUc2DiDO";
    // let group = $event;
    const village = {
      name: 'constituencyName',
      description: 'Constituency description'
    };
    // group = {
    //   ...group,
    // districts: group.districts ? [...group.districts, district] : []
    // };
    this.dataService.addVillageConstituencyIdWithStateIdDistrictId(gid, districtId, constituencyId, village);
  }

  openDialog() {
    // this.dialog.open(AddGroupComponent, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
  }
}


