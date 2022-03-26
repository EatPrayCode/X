import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-home',
  templateUrl: './admin-dashboard-home.component.html',
  styleUrls: ['./admin-dashboard-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
