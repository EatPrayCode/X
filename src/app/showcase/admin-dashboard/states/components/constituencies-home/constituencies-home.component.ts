import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-constituencies-home',
  templateUrl: './constituencies-home.component.html',
  styleUrls: ['./constituencies-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstituenciesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
