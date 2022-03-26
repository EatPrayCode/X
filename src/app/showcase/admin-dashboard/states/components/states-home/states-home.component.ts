import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-states-home',
  templateUrl: './states-home.component.html',
  styleUrls: ['./states-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
