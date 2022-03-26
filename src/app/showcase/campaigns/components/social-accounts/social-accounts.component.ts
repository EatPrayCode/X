import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-accounts',
  templateUrl: './social-accounts.component.html',
  styleUrls: ['./social-accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialAccountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
