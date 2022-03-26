import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
