import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-villages-details',
  templateUrl: './villages-details.component.html',
  styleUrls: ['./villages-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VillagesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
