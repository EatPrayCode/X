import { Router } from '@angular/router';
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Observable, of } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { DataService } from '../services/data.service';
import { ROUTE_ANIMATIONS_ELEMENTS } from './../../core/core.module';
import { StateService } from './../../services/state.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  userForm: FormGroup = new FormGroup({});
  users$: Observable<any[]> | undefined;
  isEdit$: Observable<{ value: boolean }> | undefined;

  mainLinksItems: any = [
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100z'
    },
    {
      name: 'Prefilled500',
      type: 'swiggy',
      class: 'swiggy-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 500,
      id: '500p'
    },
    {
      name: 'Prefilled1000',
      type: 'flipkart',
      class: 'flipkart-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 1000,
      id: '1000n'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100b'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100a'
    },
    {
      name: 'Prefilled100',
      type: 'zomato',
      class: 'zomato-class',
      isPremium: false,
      isFree: true,
      salePrice: 0,
      maxCharsCount: 100,
      id: '100x'
    },
  ];

  selectedType: any;
  groups: any = [];

  groups$: Observable<any> = of([]);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public dataService: DataService,
    public dialog: MatDialog,
    public stateService: StateService
  ) { }

  handleViewNetaDetails($event: any) {
    const gid = $event.id || 'NOW';
    this.router.navigate(['/dashboard/groups/' + gid]);
  }

  ngOnInit() {
    this.groups$ = this.dataService.getAllGroups();
    this.stateService.appSettingsSubject.subscribe(res=>{
      console.log(res);
    });
  }

  handleMessageOptionClick(event: any) {
    let msgTyp = event.value;
    console.log(event);
    this.selectedType = event;
  }

  handleMessageNeta($event: any) {
    this.router.navigate(['/connect/connect-new']);
  }

  openDialog() {
    this.dialog.open(AddGroupComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}

