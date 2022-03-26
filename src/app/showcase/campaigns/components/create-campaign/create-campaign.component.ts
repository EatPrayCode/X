import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
