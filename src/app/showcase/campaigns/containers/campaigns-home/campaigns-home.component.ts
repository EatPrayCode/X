import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-campaigns-home',
  templateUrl: './campaigns-home.component.html',
  styleUrls: ['./campaigns-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
